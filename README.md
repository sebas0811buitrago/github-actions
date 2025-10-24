# Vite + Vitest Project

This project is a modern web application built with [Vite](https://vite.dev/) and configured with [Vitest](https://vitest.dev/) for unit testing.

## 🚀 Features

- ⚡️ **Vite** - Next-generation frontend tooling with lightning-fast HMR
- 🧪 **Vitest** - Blazing fast unit test framework powered by Vite
- 📘 **TypeScript** - Type safety and better developer experience
- 🎯 **Modern Setup** - Latest versions of all dependencies

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🧪 Testing

This project uses Vitest for unit testing. The configuration is in `vite.config.ts`.

### Run tests in watch mode

```bash
npm test
```

### Run tests once (CI mode)

```bash
npm run test:run
```

### Run tests with UI

```bash
npm run test:ui
```

## 📁 Project Structure

```
github-actions/
├── public/           # Static assets
├── src/
│   ├── counter.ts    # Counter component
│   ├── main.ts       # Application entry point
│   ├── utils.ts      # Utility functions
│   ├── utils.test.ts # Unit tests for utilities
│   └── style.css     # Global styles
├── index.html        # Entry HTML file
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite and Vitest configuration
```

## ⚙️ Configuration

### Vite Configuration

The `vite.config.ts` file includes both Vite and Vitest configuration:

```typescript
/// <reference types="vitest/config" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
  },
});
```

### Key Configuration Options

- **globals**: Enables global test APIs (describe, it, expect) without imports
- **environment**: Sets the test environment to 'node' (can be changed to 'jsdom' for DOM testing)

## 📚 Documentation

- [Vite Documentation](https://vite.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Add tests for new functionality
4. Ensure all tests pass: `npm run test:run`
5. Build the project: `npm run build`
6. Submit a pull request

## 📝 Scripts Reference

| Command            | Description              |
| ------------------ | ------------------------ |
| `npm run dev`      | Start development server |
| `npm run build`    | Build for production     |
| `npm run preview`  | Preview production build |
| `npm test`         | Run tests in watch mode  |
| `npm run test:run` | Run tests once (CI mode) |
| `npm run test:ui`  | Run tests with UI        |

## 🔧 Extending the Project

### Adding DOM Testing

If you need to test DOM-related code, update the Vitest configuration:

```typescript
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // Changed from 'node'
  },
});
```

Then install jsdom:

```bash
npm install -D jsdom
```

### Adding Test Coverage

To enable test coverage reporting, run:

```bash
npm test -- --coverage
```

Or add it as a script in `package.json`:

```json
{
  "scripts": {
    "test:coverage": "vitest run --coverage"
  }
}
```

## 📄 License

MIT
