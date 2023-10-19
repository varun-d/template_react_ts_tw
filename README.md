# Bun + React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Using `bun` instead of `npm`, and `bunx` instead of npx.

## Tailwind + ShadCN for easy UI dev

[Tailwind](https://tailwindcss.com/docs/guides/vite) is already setup for easy yet powerfully custom styling.
[ShadCN](https://ui.shadcn.com/docs/installation/vite) providing a simple layer above [Radix UI](https://www.radix-ui.com/) and Tailwind.

Start Dev
`bun run dev`

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
