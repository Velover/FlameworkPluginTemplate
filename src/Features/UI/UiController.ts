import { OnInit, OnStart } from "@flamework/core";
import { TestController } from "Features/Test/TestController";
import { Controller } from "FlameworkIntegration";

@Controller({})
export class UiController implements OnInit, OnStart {
	constructor(private readonly test_controller: TestController) {
		print("UiController created");
	}
	onStart(): void {
		print("UiController start");
	}
	onInit(): void {
		print("UiController init");
	}
}
print("UiController loaded");
