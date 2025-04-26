let plugin: Plugin;
export function GetPlugin(): Plugin {
	assert(plugin !== undefined, "Plugin not initialized");
	return plugin;
}

export function SetPlugin(plugin_instance: Plugin): void {
	assert(plugin === undefined, "Plugin already initialized");
	plugin = plugin_instance;
}
