# Plugin Project Requirements and Structure

## Requirements (Project structure):

- Feature-based separation for better maintainability and scalability

```
Features/
/Feature1
-/Controllers (handles plugin-specific logic and state management)
-/Resources (Stores constants, static data, and configuration values)
-/UI (Contains React TSX components for feature-specific interface elements)

/Feature2
-/Controllers
//etc...
```

- Types and Interfaces should be stored in relative namespaces (Controllers, Resources) to maintain clear dependencies

## Requirements (toolings):

- The project uses roblox-ts (TypeScript to Luau transpiler) with Roblox-Luau API for instances, Math, Arrays, strings, objects
- The core framework is @flamework/core for plugin architecture
- UI components are built with @rbxts/react (TSX) NOT @rbxts/roact
- UI state management uses @rbxts/charm for reactive state handling

## Requirements (Plugin Project):

- DO NOT modify the package.json file, suggest commands for that instead
- Project follows the @flamework/core lifecycle:
  - Controllers are implemented as singletons
  - Controllers handle plugin-specific logic like toolbar creation, widget management, and feature implementation
  - Use dependency injection for accessing other controllers
  - Follow OnInit(), OnStart() pattern for initialization

## Plugin-Specific Considerations:

- Plugin instances are managed through Plugin API (CreateToolbar, CreateDockWidgetPluginGui, etc.)
- UI should be rendered within DockWidgetPluginGui instances
- Plugin settings and state should be persisted using plugin:GetSetting() and plugin:SetSetting()
- Consider performance implications of UI updates in Studio

## Best Practices:

- Keep feature modules as self-contained as possible for better maintainability
- Use TypeScript interfaces to clearly define data structures and API contracts
- Follow consistent naming conventions for classes, methods, and properties
- Use React's component-based approach for UI to promote reusability
- Keep UI logic separate from plugin logic for better code organization

## Common Patterns:

- Use Dependency Injection through Flamework for accessing controllers
- Implement state management using @rbxts/charm for reactive UI updates
- Follow singleton pattern for controllers with clear separation of concerns
- Use TypeScript's type system to create self-documenting code
- Create modular, feature-focused controllers to encapsulate functionality
