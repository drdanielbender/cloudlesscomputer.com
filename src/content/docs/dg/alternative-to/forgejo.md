---
title: Forgejo as self-hosted alternative to GitHub
description: A lightweight, self-hosted Git service as an alternative to GitHub
---

GitHub is a version control system built for code, but it works just as well for text. It's the most prominent choice developers use for their private projects—free repositories, easy collaboration, and everyone's already there. But in the age of AI agents, version control serves another purpose: tracking changes when AI helps you write, edit, and refactor your work. [Why AI agents need version control](../why/why-ai-agents-need-version-control) lets you undo unwanted changes, see exactly what was modified, and understand whether you or your AI made a particular edit. You can create a private repository on GitHub and feel secure, but here's the catch: GitHub is owned by Microsoft, one of the big tech companies. Even private repositories carry risks you might not have considered.

## The Cloud Risk

When you store your files on GitHub, even in a private repository, you're trusting Microsoft with your data:

- **Your content is visible to GitHub**: The platform can technically access everything you store, including private repos
- **Data breaches happen**: Even major platforms have security incidents that expose user data
- **Legal requests**: Governments can compel Microsoft to hand over your repository contents
- **Data misuse**: Your files may be used to train AI models or for other purposes you didn't agree to
- **Accidental exposure**: Misconfigured settings, invited collaborators, or future security bugs could make private repos public

The stakes are high: your personal projects, business ideas, AI prompts, or sensitive documents could be exposed or used without your knowledge.

## When Cloud Might Be Acceptable

There are valid situations where GitHub's cloud hosting makes sense:

- **Open source projects**: Public code meant to be shared widely
- **Non-sensitive prototypes**: Early experiments with no confidential data
- **Temporary collaboration**: Short-term projects with clear end dates
- **Public portfolios**: Code meant to showcase skills to employers
- **Teams requiring SSO/SAML**: Some organizations have compliance needs that hosted solutions handle better

## Self-Hosted Alternatives

Several Git hosting platforms exist that you can run on your own infrastructure:

- **GitLab**: Feature-rich but resource-intensive
- **Gitea**: Lightweight and simple (Forgejo's upstream)
- **Forgejo**: Community-driven fork of Gitea, more sustainable governance
- **SourceHut**: Minimalist, email-based workflow
- **Gogs**: Very lightweight, minimal dependencies

## Our Pick: Forgejo

We recommend **Forgejo** for most users making the switch from GitHub:

- **Lightweight**: Runs comfortably on a small VPS or even a Raspberry Pi
- **Familiar interface**: Similar look and feel to GitHub, reducing the learning curve
- **Active community**: Forked from Gitea with a focus on community governance
- **Full feature set**: Issues, pull requests, wikis, actions (CI/CD), and more
- **Easy migration**: Imports repositories from GitHub seamlessly
- **Open source**: Truly free, no enterprise tiers locking features behind paywalls

## Getting Started

The quickest way to try Forgejo is with Docker:

```bash
docker run -d --name forgejo \
  -p 3000:3000 \
  -v forgejo-data:/data \
  codeberg.org/forgejo/forgejo:7
```

Then open `http://localhost:3000` and follow the installation wizard.

For production setups, you'll want:
- A dedicated server or VPS (2GB RAM minimum, 4GB recommended)
- PostgreSQL or MySQL instead of SQLite
- Nginx or Caddy as a reverse proxy with HTTPS
- Regular backups of your `/data` directory

[Link to full deployment guide coming soon]
