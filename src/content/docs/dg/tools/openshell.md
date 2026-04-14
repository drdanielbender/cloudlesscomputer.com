---
title: OpenShell as agent sandbox
description: A secure sandbox environment for running AI agents safely
---

OpenShell is a sandbox environment designed specifically for running AI agents safely. When you ask an AI to write code, modify files, or execute commands on your system, you're essentially giving a foreign entity access to your computer. OpenShell creates an isolated space where AI agents can work without risking your main system.

## The problem: AI agents need room to work

AI coding agents are powerful but unpredictable:

- **File system access**: They can read, write, and delete files anywhere they have permissions
- **Command execution**: Many agents can run shell commands directly on your machine
- **Package installations**: They may install dependencies without asking
- **Network access**: Some agents fetch code or data from the internet automatically
- **Irreversible changes**: A single misunderstood prompt can modify critical system files

When you run an AI agent on your main machine, you're trusting it with everything: your documents, your SSH keys, your browser cookies, your system configuration. One overeager "improvement" could break your development environment or worse.

## What a sandbox gives you

A sandbox isolates the AI agent's work from your actual system:

- **Filesystem isolation**: The agent sees a contained environment, not your real home directory
- **Network controls**: Decide what the agent can reach (internet, localhost, nothing)
- **Resource limits**: Prevent runaway processes from consuming all CPU or memory
- **Disposable environments**: Start fresh for each task, throw away when done
- **Easy reset**: If something breaks, destroy the sandbox and create a new one

## OpenShell's approach

OpenShell provides:

- **Container-based isolation**: Each session runs in its own Docker container
- **Pre-configured environments**: Common development stacks ready to use
- **File mounting**: Selectively expose directories the agent needs to see
- **Audit logging**: See every command and file change the agent made
- **One-click reset**: Clean slate whenever you need it

## When you might not need a sandbox

For some workflows, the overhead isn't worth it:

- **Read-only exploration**: When the AI is only reading and explaining code
- **Trusted projects**: Personal codebases where you understand every change
- **Version controlled work**: When every change is tracked and easily revertible
- **Cloud-based agents**: When the AI already runs on remote infrastructure

## Our pick: OpenShell

We recommend OpenShell for anyone regularly using AI coding agents:

- **Purpose-built for AI**: Designed around how agents interact with systems
- **Fast setup**: Pre-built images mean seconds to start, not minutes
- **Familiar interface**: Works with your existing editor and AI tools
- **Cross-platform**: Runs on macOS, Linux, and Windows via Docker
- **Open source**: Inspect the code, contribute improvements, self-host if desired

## Getting started

The quickest way to try OpenShell:

```bash
# Install OpenShell
npm install -g openshell

# Create a new sandbox
openshell create my-project

# Enter the sandbox
openshell enter my-project

# Now run your AI agent inside
claude
```

Your AI agent can now work freely without risking your main system.

For regular use, configure OpenShell to automatically mount your project directory and set resource limits:

```bash
openshell config --memory=4g --cpus=2 --mount=./src:/workspace/src
```

[Link to detailed setup guide coming soon]
