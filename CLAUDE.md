# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro + Starlight documentation website. The content lives in `src/content/docs/` as MD/MDX files, and Starlight automatically generates the navigation and UI.

## Commands

```bash
pnpm dev          # Start development server at localhost:4321
pnpm build        # Build production site to ./dist/
pnpm preview      # Preview the built site locally
pnpm astro check  # Run TypeScript type checking
```

## Content Structure

- Documentation pages: `src/content/docs/`
- Add new pages as `.md` or `.mdx` files
- File path determines URL (e.g., `src/content/docs/guides/getting-started.md` → `/guides/getting-started`)
- Sidebar configuration: `astro.config.mjs`

## Configuration

Main config in `astro.config.mjs`. Starlight handles:
- Auto-generated sidebar from `reference/` directory
- Social links, search, navigation, and theming
- Logo: `src/assets/`

## Development Notes

- When unsure how to apply a change, look up the [Starlight documentation](https://starlight.astro.build/)
- Always run `pnpm dev` to verify changes work
- Custom CSS: `src/styles/custom.css`
