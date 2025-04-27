# Flamework-based Template for Plugins

Flamework + charm + react, includes ai pre-prompts for the project

## Getting Started

### Installation

```bash
#bun
bunx degit https://github.com/Velover/FlameworkPluginTemplate .

#npm
npx degit https://github.com/Velover/FlameworkPluginTemplate .
```

## Overview

This template provides a solid foundation for building Roblox Studio plugins using Flamework and React. It follows a structured, feature-based architecture that makes it easy to add new functionality to your plugin.

### Key Features

- **Flamework Integration**: Organized controllers with dependency injection
- **React UI**: Modern UI development with TSX components
- **Feature-Based Structure**: Modular organization for better maintainability
- **Plugin UI Controller**: Centralized widget management

## Project Structure

```
src/
├── Features/                 # Feature-based modules
│   ├── Greeting/             # Example feature
│   │   ├── Controllers/      # Business logic
│   │   └── UI/               # React components
│   └── PluginUI/             # Core plugin UI
│       ├── Controllers/      # Plugin widget management
│       ├── Resources/        # UI resources and constants
│       └── UI/               # Main App component
├── Utils/                    # Utility functions
├── FlameworkIntegration.ts   # Flamework setup
└── index.server.ts           # Starting point of plugin
```
