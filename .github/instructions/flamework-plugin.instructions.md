# Flamework Plugin Basics

Flamework is a TypeScript framework designed for Roblox development that emphasizes simplicity and extensibility. The `@flamework/core` package provides the foundation for organizing your plugin code with several key features.

## Core Concepts

### Controllers

Flamework organizes plugin code primarily through Controllers - singletons responsible for specific features and functionality:

- **Controllers**: Singletons responsible for specific plugin features like UI management, tools, and data handling

### Lifecycle Events

Flamework provides non-obtrusive lifecycle events that are easy to implement:

- **OnInit()**: Executed before dependency injection; used for initialization
- **OnStart()**: Executed after injection when the component is ready

### Dependency Injection

One of Flamework's key features is constructor-based dependency injection:

```ts
constructor(
  private readonly _someController: SomeController,
  private readonly _otherController: OtherController
){ }
```

## Controllers

Controllers handle plugin functionality:

```ts
import { Controller, OnStart, OnInit } from "@flamework/core";

@Controller({})
export class PluginFeatureController implements OnStart, OnInit {
	constructor(private readonly _otherController: OtherController) {}

	onInit() {
		// Initialization code - set up plugin widgets, toolbars, etc.
	}

	onStart() {
		// Code that runs after dependency injection is complete
	}
}
```

## Accessing Controllers

To access controllers outside of constructor injection, use the Dependency function:

```ts
const pluginController = Dependency<PluginController>();

// For components:
const components = Dependency<Components>();
const component = components.getComponent(instance);
const componentAsync = await components.waitForComponent(instance);
const allComponents = components.getAllComponents(instance);
```

Note that you cannot use Dependency before `Flamework.ignite();` is called.

## Plugin-Specific Benefits of Flamework

- Minimizes boilerplate code for plugin development
- Supports optional lifecycle events for proper plugin initialization
- Automatically manages dependencies between plugin components
- Provides a structured approach to organize plugin features
- Makes it easier to maintain complex plugin code

Flamework provides a structured yet flexible approach to Roblox TypeScript plugin development, making it easier to organize and maintain your plugin code while maintaining type safety.

## Controller Best Practices for Plugins

```ts
// GOOD: Well-structured plugin controller
@Controller({})
export class WidgetController implements OnStart, OnInit {
	// Only depends on other controllers
	constructor(private readonly _dataController: DataController) {}

	// Clear initialization and widget creation
	onInit() {
		// Create widget, toolbar button, etc.
	}

	onStart() {
		// Initialize after dependencies are ready
	}

	// Public methods for other controllers to use
	ShowWidget(): void {
		// Code to show the widget
	}
}
```
