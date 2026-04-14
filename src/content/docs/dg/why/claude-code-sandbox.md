---
title: Why using Claude Code in a sandbox protects you
description: How running Claude Code in an isolated environment keeps your system safe
---

Claude Code is a powerful AI coding assistant that can read files, write code, run commands, and make changes across your entire project. It is designed to be helpful and safe, but it still operates with the permissions of your user account. When you run it on your main machine, it has access to everything: your documents, SSH keys, environment variables, browser data, and system files. A sandbox changes this equation.

## What Claude Code can do

Claude Code is not just a chat interface. It can:

- **Read any file** you have permission to access
- **Write and modify files** across your entire system
- **Execute shell commands** including package managers and build tools
- **Access environment variables** which often contain API keys and secrets
- **Make network requests** to fetch dependencies or documentation
- **Iterate autonomously** on tasks you describe, making multiple changes

This power is what makes it useful. You can say "refactor this codebase to use async/await" and it will work across dozens of files. But that same power creates risk if something goes wrong.

## The risks of running on your main system

When Claude Code runs on your main machine without isolation:

- **Accidental overreach**: A misunderstood prompt might modify files outside your project
- **Cascading changes**: A refactor could touch configuration files or scripts you did not intend to change
- **Environment pollution**: Installed packages, modified paths, or changed settings persist after the session
- **Secret exposure**: Environment files with API keys or credentials are readable and could be logged
- **Irreversible operations**: Commands like `rm -rf` or database migrations happen on your actual system

Even when Claude Code behaves correctly, mistakes in your prompts or its interpretations can have real consequences on your working environment.

## What a sandbox changes

Running Claude Code inside a sandbox creates boundaries:

- **Filesystem isolation**: The AI only sees what you explicitly mount into the container
- **Disposable state**: When you are done, the entire environment disappears with all its changes
- **Controlled network**: Decide if the sandbox can reach the internet, your local services, or nothing at all
- **Resource limits**: Prevent runaway processes from consuming all your memory or CPU
- **Clean reset**: Start every session with a known, clean state

If Claude Code makes a mistake in a sandbox, you destroy the container and start over. Your main system remains untouched.

## A practical example

Imagine you ask Claude Code to "clean up temporary files in this project." On your main system, if the AI misidentifies what is temporary, it might delete important files. In a sandbox, the worst case is losing work inside that isolated environment. Your actual projects, documents, and system files remain safe.

## When sandboxing is essential

Use a sandbox when:

- **Exploring unfamiliar code**: You do not know what the AI might need to touch
- **Running untrusted suggestions**: The AI proposes commands you do not fully understand
- **Working with sensitive data**: Projects containing credentials, personal information, or proprietary code
- **Autonomous tasks**: Letting the AI work on multi-step problems without supervision
- **Learning and experimenting**: Trying new tools or approaches where outcomes are uncertain

## When you might skip it

For some workflows, the friction is not worth it:

- **Read-only sessions**: When you only want the AI to explain or analyze code
- **Well-understood projects**: Small, familiar codebases where you can predict every change
- **Version-controlled work**: When every change is tracked and easily revertible
- **Cloud environments**: When you are already working on remote infrastructure

## Getting started with sandboxing Claude Code

The simplest approach uses Docker:

```bash
# Create a sandbox with your project
docker run -it --rm \
  -v $(pwd):/workspace \
  -w /workspace \
  --network=host \
  node:20 bash

# Inside the container, install and run Claude Code
npm install -g @anthropic-ai/claude-code
claude
```

For a more robust setup, tools like OpenShell provide pre-configured environments specifically designed for AI agents.

## The bottom line

Claude Code is a powerful tool that operates with real permissions on your system. A sandbox does not limit what it can do for you—it limits what it can do to you. The few seconds spent starting an isolated environment can save hours of recovery from an accidental change.

Run Claude Code in a sandbox. Your future self will thank you.
