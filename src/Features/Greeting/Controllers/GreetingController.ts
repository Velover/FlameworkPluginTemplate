import { OnInit, OnStart } from "@flamework/core";

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
