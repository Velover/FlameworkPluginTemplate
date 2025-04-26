import { Flamework } from "@flamework/core";
import { LoadModules } from "FlameworkIntegration";

LoadModules(script.WaitForChild("Features", 20) as Instance);
Flamework.ignite();
