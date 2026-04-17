---
title: Why AI agents should use file versioning
description: Why version control is essential when collaborating with AI agents
---

Working with AI agents feels like having a skilled collaborator who never sleeps. They help write code, draft documents, create configurations, and refine content. But collaboration creates change, and change creates risk. When an AI agent modifies ten files in a single session, how do you know what actually changed? What if the changes break something? What if you preferred the previous version?

GitHub is a version control system built for code, but it works just as well for text. It's the most prominent choice developers use for their projects as the service offers a resonable free tier and allows easy collaboration as everyone is already there. But in the age of AI agents, version control serves also another purpose: tracking changes when AI helps you write, edit, and refactor your work. A version control system lets you undo unwanted changes, see exactly what was modified when, and understand whether you or on of your AI agents made a particular edit. You can create a private repository on GitHub, but here's the catch: GitHub is owned by Microsoft, one of the biggest US tech companies. And even if you trust Microsoft using GitHub carries risks you might not have considered.

## What version control gives you

A version control system tracks every change to your files over time. When working with AI agents, this provides three critical capabilities:

### 1. The undo button

Made a change you regret? Revert to any previous version instantly. Whether the AI introduced a bug, changed your writing style, or modified a configuration you preferred, you can always go back.

### 2. Change transparency

See exactly what the AI modified, line by line. Compare versions side by side. Understand the scope of changes before accepting them. This visibility turns opaque AI actions into inspectable, reviewable work.

### 3. Attribution

Know who did what. When you and an AI agent work together, version control tracks which changes were yours and which came from your AI agent. This matters for understanding, debugging, and accountability.

## Getting started

If you're new to version control, start by learning the basics about Git, the most prominent version control system, in less than 25 minutes by watching the [official introdcution videos](https://git-scm.com/learn).

Tools like Git can feel intimidating, but you only need a few basic commands to gain enormous benefits. Many modern editors and AI coding tools integrate version control directly into their interfaces, making the workflow nearly invisible.

But my preferred way of using Git is in the terminal as it gives you full control over the file versioning. And if in doubt how to achieve a specific change, your favorite AI chatbot or AI agent will give you command you are looking for with a nice explanation of it.

## Where to store your projects

Your file versioning can be initiated and only happen in the project folder itself. However, a big additional benefit is added by syncing your changes to a central place and from there to other devices. This provides on the hand a backup like copy of your files and gives you the flexibility to work on a project from multiple devices like your computer, tablet and phone.

The most common choice for this is the cloud-based service named GitHub, but there are more privacely-friendly alternatives ([read more](../../alternative-to/forgejo)).

## The bottom line

AI agents are powerful collaborators, but power without accountability is risky. Version control gives you that piece of mind as all changes to your files are becoming transparent, reviewable, and reversible.
