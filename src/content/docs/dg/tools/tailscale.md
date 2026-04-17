---
title: Tailscale for private networking
description: A zero-configuration VPN that creates secure mesh networks between your devices
---

Tailscale is a zero-configuration VPN that creates a secure, private mesh network between your devices. Unlike traditional VPNs that route all traffic through a central server, Tailscale connects devices directly to each other using WireGuard encryption, making it fast, simple, and ideal for accessing self-hosted services like Forgejo from anywhere.

## The problem: accessing services across networks

When you self-host services like Forgejo on a home server or Raspberry Pi, you quickly run into connectivity challenges:

- **Different networks**: Your laptop, phone, and server may be on different Wi-Fi networks or behind different routers
- **Dynamic IP addresses**: Home internet connections often change IP addresses, breaking hardcoded links
- **Firewall complications**: Routers block incoming connections by default, requiring complex port forwarding
- **Security exposure**: Opening ports to the internet invites attacks and scanning attempts
- **CGNAT issues**: Many ISPs use Carrier-Grade NAT, making traditional port forwarding impossible

Simply put, accessing your self-hosted Forgejo from your phone while away from home is surprisingly difficult without help.

## What Tailscale provides

Tailscale solves these problems by creating an overlay network:

- **Mesh connectivity**: Every device can reach every other device directly, regardless of physical network
- **Automatic NAT traversal**: Punches through firewalls and routers without configuration
- **Static addresses**: Each device gets a stable 100.x.x.x IP address that never changes
- **End-to-end encryption**: All traffic is encrypted with WireGuard—no data passes through Tailscale servers unencrypted
- **MagicDNS**: Access devices by name instead of remembering IP addresses

## Privacy considerations

Tailscale is a commercial service, which raises valid privacy questions:

- **Account required**: You need a Tailscale account to coordinate the network
- **Coordination servers**: Tailscale's servers facilitate initial connection setup (but do not relay traffic when direct connections are possible)
- **Control plane**: They can see which devices belong to your network and when they connect
- **Optional relay fallback**: If direct connections fail, traffic may route through Tailscale's DERP relay servers (encrypted)

**The tradeoff**: You're exchanging visibility to Tailscale (network topology, device identities) for the convenience of easy, secure connectivity. Your actual data remains encrypted end-to-end.

## When you might not need Tailscale

For some setups, Tailscale adds unnecessary complexity:

- **Single-device access**: If you only access Forgejo from the machine it's running on
- **Already on the same network**: If all your devices stay on one trusted local network
- **Traditional VPN in place**: If you already run your own WireGuard or OpenVPN server
- **Cloud-hosted services**: If your services are already on the public internet with proper authentication

## Our pick: Tailscale

We recommend Tailscale for anyone self-hosting services across multiple devices or locations:

- **Truly zero-config**: Install, log in, and devices appear—no firewall rules, no port forwarding
- **Generous free tier**: Personal use covers most users with up to 20 devices
- **Cross-platform**: Native apps for macOS, Windows, Linux, iOS, Android, and even some routers
- **Exit nodes**: Optionally route all internet traffic through a specific device for location privacy
- **ACLs and sharing**: Fine-grained access control and easy secure sharing with friends or collaborators
- **Self-hostable coordination**: The control server (Headscale) is open source if you want complete independence

## Getting started

The quickest way to set up Tailscale:

1. **Create an account**: Sign up at [tailscale.com](https://tailscale.com)

2. **Install on your Forgejo server**:
   ```bash
   # On Debian/Ubuntu/Raspberry Pi OS
   curl -fsSL https://tailscale.com/install.sh | sh
   sudo tailscale up
   ```

3. **Install on your devices**: Download the app for your platform and sign in with the same account

4. **Access Forgejo**: Use your server's Tailscale IP (shown in the admin console) or MagicDNS name (e.g., `http://forgejo:3000`)

That's it. Your devices now share a private network that works from anywhere.

## Next steps

Once Tailscale is running, you can:

- Enable MagicDNS for friendlier hostnames
- Configure an exit node for secure browsing on untrusted networks
- Set up ACLs to restrict which devices can access Forgejo
- Explore Headscale if you want a self-hosted control server

[Detailed ACL and security configuration guide coming soon]
