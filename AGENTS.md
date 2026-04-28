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

### Digital Garden Structure

Articles in the digital garden follow a specific format and are organized in folders under `src/content/docs/dg/`:

| Format | Folder | Description |
|--------|--------|-------------|
| `alternative-to` | `dg/alternative-to/` | Privacy-friendly alternatives to popular services (e.g., Forgejo as alternative to GitHub) |
| `tools` | `dg/tools/` | Tool recommendations and guides (e.g., OpenShell as agent sandbox) |
| `why` | `dg/why/` | Explanatory articles on privacy topics (e.g., Why AI agents need version control) |

**When creating new articles:** Store them in the appropriate folder based on their format type.

## Configuration

Main config in `astro.config.mjs`. Starlight handles:
- Auto-generated sidebar from `reference/` directory
- Social links, search, navigation, and theming
- Logo: `src/assets/`

## Development Notes

- When unsure how to apply a change, look up the [Starlight documentation](https://starlight.astro.build/)
- Run `pnpm build` to verify every non-minor change.
- Minor changes do not require `pnpm build`: changing only wording of a content page, fixing typos in writing, or changing links.
- Custom CSS: `src/styles/custom.css`

## Commit Conventions

- Do NOT include "Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>" in commit messages
- Do NOT use heredoc EOF indicators in commit messages
