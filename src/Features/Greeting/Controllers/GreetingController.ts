import { Controller, OnInit, OnStart } from "@flamework/core";

@Controller({})
export class GreetingController implements OnInit, OnStart {
	constructor() {}

	onInit(): void {
		print("GreetingController initialized");
	}

	onStart(): void {
		print("GreetingController started");
	}

	Greet(name: string): string {
		return `Hello, ${name}!`;
	}
}
