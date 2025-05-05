import { Modding, Reflect } from "@flamework/core";
import { GetPlugin } from "./Utils/PluginGetting";

interface ControllerConfig {
	loadOrder?: number;
}

export interface OnUnload {
	/**@hidden */
	onUnload(): void;
}

const controllersForUnloadingSet = new Set<OnUnload>();

/**
 * Request the required metadata for lifecycle events and dependency resolution.
 * @metadata flamework:implements flamework:parameters
 */
export const Controller = Modding.createDecorator<[ControllerConfig]>(
	"Class",
	(descriptor, [config]) => {
		Reflect.defineMetadata(descriptor.object, "flamework:singleton", true);
		Reflect.defineMetadata(descriptor.object, "flamework:loadOrder", config.loadOrder);
	},
);

export function LoadModules(parent: Instance): void {
	const modules = [parent, ...parent.GetDescendants()].filter((descendant) =>
		descendant.IsA("ModuleScript"),
	);
	for (const module of modules) {
		const [success, err] = pcall(require, module);
		if (success) continue;
		print(`Failed to load module ${module.Name}: ${err}`);
		warn(err);
	}

	GetPlugin().Unloading.Connect(() => {
		for (const controller of controllersForUnloadingSet) {
			const [succ, err] = pcall(() => controller.onUnload());
			if (!succ) {
				warn(`Failed to unload controller: ${err}`);
			}
		}
	});
}

Modding.onListenerAdded<OnUnload>((obj) => {
	controllersForUnloadingSet.add(obj);
});

Modding.onListenerRemoved<OnUnload>((obj) => {
	controllersForUnloadingSet.delete(obj);
});
