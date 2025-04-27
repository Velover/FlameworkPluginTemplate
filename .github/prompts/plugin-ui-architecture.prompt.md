# PluginUI as the Central Entry Point

## Architecture Overview

This plugin template follows a centralized UI architecture where the `PluginUiController` manages the main widget and the `App` component serves as the container for all UI elements.

## Entry Point Structure

### PluginUiController

The `PluginUiController` is responsible for:

1. Creating and managing the plugin widget
2. Initializing the toolbar and button
3. Rendering the main React App component
4. Handling widget visibility and properties

```ts
@Controller({})
export class PluginUiController implements OnInit, OnStart {
	// Widget and toolbar management
	private _widget!: DockWidgetPluginGui;

	onInit(): void {
		// Create widget and toolbar
	}

	onStart(): void {
		// Render React App component
		const root = createRoot(this._widget);
		root.render(React.createElement(App));
	}

	// Methods to control widget
	public SetTitle(title: string): void {}
	public SetEnabled(enabled: boolean): void {}
	public ToggleEnabled(): void {}
}
```

### App Component

The `App` component serves as the main container for all UI elements:

```tsx
export function App() {
	return (
		<frame Size={UDim2.fromScale(1, 1)} BackgroundColor3={new Color3(1, 1, 1)}>
			{/* All feature UIs are included here */}
			<FeatureOneUI />
			<FeatureTwoUI />
			<GreetingUi />
		</frame>
	);
}
```

## Integration Guidelines

### Adding New Features

When adding a new feature:

1. Create a feature-specific UI component in its own folder (e.g., `Features/NewFeature/UI/NewFeatureUi.tsx`)
2. Add the UI component to the App component:

```tsx
export function App() {
	return (
		<frame Size={UDim2.fromScale(1, 1)} BackgroundColor3={new Color3(1, 1, 1)}>
			{/* Existing UIs */}
			<GreetingUi />
			{/* New feature UI */}
			<NewFeatureUi />
		</frame>
	);
}
```

3. Create a controller for the feature that contains business logic but defers UI rendering to the PluginUiController

### Controller-UI Communication

Feature controllers should:

1. Focus on business logic and state management
2. Use dependencies to interact with the PluginUiController when needed
3. Expose methods and state for UI components to consume

```ts
@Controller({})
export class FeatureController implements OnInit {
	constructor(private readonly pluginUiController: PluginUiController) {}

	onInit(): void {
		// Feature initialization
	}

	// Methods exposed to UI components
	public DoSomething(): void {
		// Implementation

		// Update widget title if needed
		this.pluginUiController.SetTitle("New Title");
	}
}
```

## Benefits of Centralized UI Architecture

1. **Single Source of Truth**: One controller manages all plugin UI elements
2. **Consistent UI Management**: Widget behavior is controlled in one place
3. **Simplified Feature Development**: Features focus on business logic, not UI container management
4. **Easier Debugging**: All UI components flow through a single rendering point
5. **Cleaner Code Organization**: Clear separation between UI rendering and business logic

Always extend the App component for new UI features rather than creating separate widgets or GUI instances.
