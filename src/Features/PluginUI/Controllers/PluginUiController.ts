import { OnInit, OnStart } from "@flamework/core";
import React from "@rbxts/react";
import ReactRoblox, { createRoot } from "@rbxts/react-roblox";
import { Controller, OnUnload } from "FlameworkIntegration";
import { GetPlugin } from "Utils/PluginGetting";
import { App } from "../UI/App";

@Controller({})
export class PluginUiController implements OnInit, OnStart, OnUnload {
	private readonly PLUGIN_WIDGET_ID = "SomePluginId";
	private readonly PLUGIN_DEFAULT_WIDGET_TITLE = "Plugin Title";

	private readonly PLUGIN_TOOLBAR_ID = "SomePluginToolbarId";

	private readonly PLUGIN_BUTTON_ID = "SomePluginButtonId";
	private readonly PLUGIN_BUTTON_TOOLTIP = "Tooltip for the plugin button";
	private readonly PLUGIN_BUTTON_ICON_ID = "rbxassetid://1234567890"; // Replace with your icon ID
	private readonly PLUGIN_BUTTON_TEXT = "Plugin Button";

	private _widgetInfo = new DockWidgetPluginGuiInfo(
		Enum.InitialDockState.Float,
		false,
		true,
		200,
		200,
		200,
		200,
	);
	private _widget!: DockWidgetPluginGui;
	private _toolbar!: PluginToolbar;
	private _toolbarButton!: PluginToolbarButton;
	private _root?: ReactRoblox.Root;

	constructor() {}
	onUnload(): void {
		this._root?.unmount();
	}
	onInit(): void {
		this._widget = GetPlugin().CreateDockWidgetPluginGui(this.PLUGIN_WIDGET_ID, this._widgetInfo);
		this.SetTitle(this.PLUGIN_DEFAULT_WIDGET_TITLE);

		this._toolbar = GetPlugin().CreateToolbar(this.PLUGIN_TOOLBAR_ID);
		this._toolbarButton = this._toolbar.CreateButton(
			this.PLUGIN_BUTTON_ID,
			this.PLUGIN_BUTTON_TOOLTIP,
			this.PLUGIN_BUTTON_ICON_ID,
			this.PLUGIN_BUTTON_TEXT,
		);
		this._toolbarButton.Click.Connect(() => this.ToggleEnabled());
	}
	onStart(): void {
		this._root = createRoot(this._widget);
		this._root.render(React.createElement(App));
	}

	public SetTitle(title: string): void {
		this._widget["Title" as never] = title as never;
	}
	public SetEnabled(enabled: boolean): void {
		this._widget.Enabled = enabled;
	}
	public ToggleEnabled(): void {
		this.SetEnabled(!this._widget.Enabled);
	}
}
