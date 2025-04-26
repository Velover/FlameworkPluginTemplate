import { OnInit, OnStart } from "@flamework/core";
import { Controller } from "FlameworkIntegration";

@Controller({})
export class TestController implements OnInit, OnStart {
	constructor() {
		print("TestController created");
	}
	onInit(): void | Promise<void> {
		print("TestController init");
	}
	onStart(): void {
		print("TestController start");
	}
}
print("TestController loaded");
