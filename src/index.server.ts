import { Flamework } from "@flamework/core";
import { LoadModules } from "FlameworkIntegration";
import { SetPlugin } from "Utils/PluginGetting";

SetPlugin(plugin);
LoadModules(script.WaitForChild("Features", 20) as Instance);
Flamework.ignite();
