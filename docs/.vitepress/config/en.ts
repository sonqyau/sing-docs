import type { DefaultTheme } from "vitepress";
import { defineConfig } from "vitepress";
import { createPrefixedItems, createPrefixedSidebar } from "./common";

const homeSideBar: DefaultTheme.SidebarItem[] = [
  {
    text: "sing-box",
    items: [
      { text: "Home", link: "/" },
      { text: "Changelog", link: "/changelog" },
      { text: "Migration", link: "/migration" },
      { text: "Deprecated", link: "/deprecated" },
      { text: "Support", link: "/support" },
      { text: "Sponsors", link: "/sponsors" },
    ],
  },
];

const installationSideBar: DefaultTheme.SidebarItem[] = [
  {
    text: "Installation",
    items: [
      { text: "Package Manager", link: "package-manager" },
      { text: "Docker", link: "docker" },
      { text: "Build from source", link: "build-from-source" },
    ],
  },
];

const clientsSideBar: DefaultTheme.SidebarItem[] = [
  {
    text: "Graphical Clients",
    items: [
      { text: "Introduction", link: "/" },
      {
        text: "Android",
        link: "android/",
        items: createPrefixedItems("android/", [
          { text: "Features", link: "features" },
        ]),
      },
      {
        text: "Apple platforms",
        link: "apple/",
        items: createPrefixedItems("apple/", [
          { text: "Features", link: "features" },
        ]),
      },
      { text: "General", link: "general" },
      { text: "Privacy", link: "privacy" },
    ],
  },
];

const manualSideBar: DefaultTheme.SidebarItem[] = [
  {
    text: "Manual",
    items: [
      {
        text: "Proxy",
        link: "",
        items: createPrefixedItems("proxy/", [
          { text: "Server", link: "server" },
          { text: "Client", link: "client" },
        ]),
      },
      {
        text: "Proxy Protocol",
        link: "",
        items: createPrefixedItems("proxy-protocol/", [
          { text: "Shadowsocks", link: "shadowsocks" },
          { text: "Trojan", link: "trojan" },
          { text: "Hysteria 2", link: "hysteria2" },
        ]),
      },
      {
        text: "Misc",
        link: "",
        items: createPrefixedItems("misc/", [
          { text: "TunnelVision", link: "tunnelvision" },
        ]),
      },
    ],
  },
];

const configurationSideBar: DefaultTheme.SidebarItem[] = [
  {
    text: "Configuration",
    items: [
      { text: "Introduction", link: "/" },
      { text: "Log", link: "log" },
      { text: "NTP", link: "ntp" },
      {
        text: "DNS",
        link: "dns",
        items: createPrefixedItems("dns/", [
          { text: "DNS Server", link: "server" },
          { text: "DNS Rule", link: "rule" },
          { text: "DNS Rule Action", link: "rule_action" },
          { text: "FakeIP", link: "fakeip" },
        ]),
      },
      {
        text: "Route",
        link: "route",
        items: createPrefixedItems("route/", [
          { text: "Geosite", link: "geosite" },
          { text: "GeoIP", link: "geoip" },
          { text: "Route Rule", link: "rule" },
          { text: "Route Rule Action", link: "rule_action" },
          { text: "Sniff", link: "sniff" },
        ]),
      },
      {
        text: "Rule Set",
        link: "rule-set",
        items: createPrefixedItems("rule-set/", [
          { text: "Headless Rule", link: "headless-rule" },
          { text: "Source Format", link: "source-format" },
          { text: "Adguard DNS Filter", link: "adguard" },
        ]),
      },
      {
        text: "Experimental",
        link: "experimental",
        items: createPrefixedItems("experimental/", [
          { text: "Cache File", link: "cache-file" },
          { text: "Clash API", link: "clash-api" },
          { text: "V2Ray API", link: "v2ray-api" },
        ]),
      },
      {
        text: "Shared",
        link: "",
        items: createPrefixedItems("shared/", [
          { text: "Listen", link: "listen" },
          { text: "Dial", link: "dial" },
          { text: "TLS", link: "tls" },
          { text: "DNS01 Challenge", link: "dns01_challenge" },
          { text: "Multiplex", link: "multiplex" },
          { text: "V2Ray Transport", link: "v2ray-transport" },
          { text: "UDP over TCP", link: "udp-over-tcp" },
          { text: "TCP Brutal", link: "tcp-brutal" },
        ]),
      },
      {
        text: "Endpoint",
        link: "endpoint",
        items: createPrefixedItems("endpoint/", [
          { text: "WireGuard", link: "wireguard" },
          { text: "Tailscale", link: "tailscale" },
        ]),
      },
      {
        text: "Certificate",
        link: "certificate",
      },
      {
        text: "Inbound",
        link: "inbound",
        items: createPrefixedItems("inbound/", [
          { text: "Direct", link: "direct" },
          { text: "Mixed", link: "mixed" },
          { text: "SOCKS", link: "socks" },
          { text: "HTTP", link: "http" },
          { text: "Shadowsocks", link: "shadowsocks" },
          { text: "VMess", link: "vmess" },
          { text: "Trojan", link: "trojan" },
          { text: "Naïve", link: "naive" },
          { text: "Hysteria", link: "hysteria" },
          { text: "ShadowTLS", link: "shadowtls" },
          { text: "VLESS", link: "vless" },
          { text: "TUIC", link: "tuic" },
          { text: "Hysteria2", link: "hysteria2" },
          { text: "Tun", link: "tun" },
          { text: "Redirect", link: "redirect" },
          { text: "TProxy", link: "tproxy" },
          { text: "AnyTLS", link: "anytls" },
        ]),
      },
      {
        text: "Outbound",
        link: "outbound",
        items: createPrefixedItems("outbound/", [
          { text: "Direct", link: "direct" },
          { text: "Block", link: "block" },
          { text: "SOCKS", link: "socks" },
          { text: "HTTP", link: "http" },
          { text: "Shadowsocks", link: "shadowsocks" },
          { text: "VMess", link: "vmess" },
          { text: "Trojan", link: "trojan" },
          { text: "WireGuard", link: "wireguard" },
          { text: "Hysteria", link: "hysteria" },
          { text: "ShadowTLS", link: "shadowtls" },
          { text: "VLESS", link: "vless" },
          { text: "TUIC", link: "tuic" },
          { text: "Hysteria2", link: "hysteria2" },
          { text: "Tor", link: "tor" },
          { text: "SSH", link: "ssh" },
          { text: "DNS", link: "dns" },
          { text: "Selector", link: "selector" },
          { text: "URLTest", link: "urltest" },
          { text: "Naïve", link: "naive" },
          { text: "AnyTLS", link: "anytls" },
        ]),
      },
      {
        text: "Service",
        link: "service",
        items: createPrefixedItems("service/", [
          { text: "CCM", link: "ccm" },
          { text: "DERP", link: "derp" },
          { text: "OCM", link: "ocm" },
          { text: "Resolved", link: "resolved" },
          { text: "SSM API", link: "ssm-api" },
        ]),
      },
    ],
  },
];

const navItems: DefaultTheme.NavItemWithLink[] = [
  { text: "Installation", link: "installation/package-manager" },
  { text: "Graphical Clients", link: "clients/" },
  { text: "Manual", link: "manual/proxy/server" },
  { text: "Configuration", link: "configuration/" },
];

const sideBarConfig: DefaultTheme.SidebarMulti = {
  "/installation": { base: "/installation/", items: installationSideBar },
  "/clients": { base: "/clients/", items: clientsSideBar },
  "/manual": { base: "/manual/", items: manualSideBar },
  "/configuration": { base: "/configuration/", items: configurationSideBar },
  "/": { base: "/", items: homeSideBar },
};

export const en = defineConfig({
  lang: "en-US",
  themeConfig: {
    nav: createPrefixedItems("/en/", navItems),
    footer: { copyright: "Copyright © 2022 nekohasekai" },
    sidebar: createPrefixedSidebar("/en", sideBarConfig),
  },
});
