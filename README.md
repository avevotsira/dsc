Here's the modified README for Astro, following the structure and style of the Next.js README you provided:

File: README.md

````markdown
# Astro Starter Kit: Basics

This is an [Astro](https://astro.build/) project bootstrapped with [`create astro`](https://docs.astro.build/en/getting-started/).

## Getting Started

1. Clone the repo

2. Update the .env (if applicable)

First, run the development server:

```bash


# Install deps
npm install

# Run dev server
npm dev
```
````

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory except if used within content

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### pnpm

- Fixing Prettier lint

```bash
npm format:write
```

### Convention

- filename should be in `kebab-case`
- variable name should be in `camelCase`
- constant should be in `UPPERCASE`
- component should be in `PascalCase`
- [Git Commit Message](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

### Docs

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Server](https://astro.build/chat)

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
