---
title: "GitHub to Forgejo for file versioning"
description: A lightweight, self-hosted Git service as an alternative to GitHub
---

Version control was initially created by developers to maintain a history of their code and simplify collaboration. Today, GitHub has become the de facto standard for hosting Git repositories. It's a cloud service where you can store your code publicly or create private repositories to control who has access to your files. While designed for code, version control systems like Git are well suited to track changes of any text files—making them useful for documentation, writing, configuration files, and more. However, GitHub is owned by Microsoft, one of the big US tech companies, which raises important privacy considerations for your data.

## The Cloud Risk

When you store your files on GitHub, even in a private repository, you're trusting Microsoft with your data:

- **Your content is visible to GitHub**: The platform can technically access everything you store, including private repos
- **Data breaches happen**: Even major platforms have security incidents that expose user data
- **Legal requests**: Governments can compel Microsoft to hand over your repository contents
- **Data misuse**: Your files may be used to train AI models or for other purposes you didn't agree to ([read more](../../why/why-check-privacy-policy-cloud-services/))
- **Accidental exposure**: Misconfigured settings, invited collaborators, or future security bugs could make private repos public

The stakes are high: your personal projects, business ideas, AI prompts, or sensitive documents could be exposed or used without your knowledge.

## When Cloud Might Be Acceptable

There are valid situations where GitHub's cloud hosting makes sense:

- **Open source projects**: Projects you want to make accessible for others
- **Non-sensitive prototypes**: Early experiments with no confidential data

## Self-Hosted Alternatives

Several Git hosting platforms exist that you can run on your own infrastructure:

- **GitLab**: Feature-rich but resource-intensive that is best suited for companies
- **Gitea**: Lightweight version control, which shifted in 2022 to for-profit project controlled by a company
- **Forgejo**: Community-driven fork of Gitea to ensure the project stays independent

## My Pick for Personal Projects: Forgejo

I recommend Forgejo for most private users making the switch from GitHub:

- **Lightweight**: Runs comfortably on a small VPS (Why VPS (Virtual Private Servers) are not an privacy-friendly option) or any homeserver you own even a Raspberry Pi
- **Familiar interface**: Similar look and feel to GitHub, reducing the learning curve
- **Full feature set**: Issues, pull requests, wikis, actions (CI/CD), and more
- **Easy migration**: Imports repositories from GitHub seamlessly
- **Open source**: Truly free, no enterprise tiers locking features behind paywalls

## Getting Started

To get started and explore the capabilities you can install Forgejo locally on the system you are working on. But if you target a more flexible installation which also provides a copy of all your files in your version control system, you can jump to the [Always-on Installation](#always-on-installation) section.

### macOS

On a Mac this is quite easy after you installed the package manager [brew](https://brew.sh/). To install and run Forgejo you only need to run the following two commands in your terminal:

```
brew install forgejo
forgejo web
```

Open your browser at [http://localhost:3000](http://localhost:3000) and you will see a quite daunting configuration screen. However, most values are fine with their default entries.

The used database is likely the mosts important choice and it is difficult to give a general recommendation. But if you use Forgejo for your personal project which you keep private and only work with a few collaborators (human and / or AI), my recommendation is to change the database entry to the value **SQLite3** which is a simple database stored as a single file on your disk.

Furthermore you have to scroll down and click the Administrator account settings to configure your username and password.

That it. You can log in and create your first project or import one from GitHub.

### Linux / Windows

For Linux and Windows (with WSL2) you can use the [official binary](https://forgejo.org/releases/) and follow the installation instructions in the [Forgejo documentation](https://forgejo.org/docs/latest/admin/installation/binary/).

Running Forgejo for the first time and doing the initial configuration is the same as described in the [macOS](#macos) section above.

## Always-on Installation

The binary installation on your work device described above can be used permanently but brings at least two downsides. The machine running Forgejo locally must be turned on if you want to access the version control system from another device like your phone, second computer or your dedicated AI agent computer. Furthermore if your version control is running on the same system as you work with your files you put in the version control, you don't have the benefit of an additional backup copy of your files unless you check them out on another device.

Running the Forgejo on a dedicated system, like a small thin client, Mac Mini or even a Raspberry Pi, eliminates these drawbacks.

On such a dedicated system you can install Forgejo also via the binary as described in the Getting Started section. However I would recommend to run it besides other services in a dedicated Docker container to make your setup a bit safer by isolating Forgejo from other services running on your device.

## Use Multiple Devices

One of the main benefits of using a version control system is that you can access the current project status from different devices and keep your work in sync across them.

To access you local Forgejo installation your devices must be in the same network and you need to know the IP address of the device you installed Forgejo on as [http://localhost:3000](http://localhost:3000) is the loopback address which targets always the device you are using right now.

However, instead of identifying your local IP address and using that one in combination with the port 3000, my recommendation is to set up [Tailscale](../../tools/tailscale/). The latter creates a virtual private network which even lets you access Forgejo and other services if your devices are connected differently to the internet.

## Next steps

You will be able to figure out everything else on your own or with advice from your favorite chatbot or personal AI agent.
