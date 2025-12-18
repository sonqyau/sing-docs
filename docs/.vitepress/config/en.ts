import { DefaultTheme, defineConfig } from "vitepress";
import { createItemsWithPrefix, sidebarWithPrefix } from "./common";

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
        items: createItemsWithPrefix("android/", [
          { text: "Features", link: "features" },
        ]),
      },
      {
        text: "Apple platforms",
        link: "apple/",
        items: createItemsWithPrefix("apple/", [
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
        items: createItemsWithPrefix("proxy/", [
          { text: "Server", link: "server" },
          { text: "Client", link: "client" },
        ]),
      },
      {
        text: "Proxy Protocol",
        link: "",
        items: createItemsWithPrefix("proxy-protocol/", [
          { text: "Shadowsocks", link: "shadowsocks" },
          { text: "Trojan", link: "trojan" },
          { text: "Hysteria 2", link: "hysteria2" },
        ]),
      },
      {
        text: "Misc",
        link: "",
        items: createItemsWithPrefix("misc/", [
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
        items: createItemsWithPrefix("dns/", [
          { text: "DNS Server", link: "server" },
          { text: "DNS Rule", link: "rule" },
          { text: "DNS Rule Action", link: "rule_action" },
          { text: "FakeIP", link: "fakeip" },
        ]),
      },
      {
        text: "Route",
        link: "route",
        items: createItemsWithPrefix("route/", [
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
        items: createItemsWithPrefix("rule-set/", [
          { text: "Headless Rule", link: "headless-rule" },
          { text: "Source Format", link: "source-format" },
          { text: "Adguard DNS Filter", link: "adguard" },
        ]),
      },
      {
        text: "Experimental",
        link: "experimental",
        items: createItemsWithPrefix("experimental/", [
          { text: "Cache File", link: "cache-file" },
          { text: "Clash API", link: "clash-api" },
          { text: "V2Ray API", link: "v2ray-api" },
        ]),
      },
      {
        text: "Shared",
        link: "",
        items: createItemsWithPrefix("shared/", [
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
        items: createItemsWithPrefix("endpoint/", [
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
        items: createItemsWithPrefix("inbound/", [
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
        items: createItemsWithPrefix("outbound/", [
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
        items: createItemsWithPrefix("service/", [
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

export const en = defineConfig({
  lang: "en-US",
  themeConfig: {
    nav: createItemsWithPrefix("/en/", [
      { text: "Installation", link: "installation/package-manager" },
      { text: "Graphical Clients", link: "clients/" },
      { text: "Manual", link: "manual/proxy/server" },
      { text: "Configuration", link: "configuration/" },
    ]),

    footer: {
      copyright: `Copyright © 2022 nekohasekai`,
    },

    sidebar: sidebarWithPrefix("/en", {
      "/installation": { base: "/installation/", items: installationSideBar },
      "/clients": { base: "/clients/", items: clientsSideBar },
      "/manual": { base: "/manual/", items: manualSideBar },
      "/configuration": {
        base: "/configuration/",
        items: configurationSideBar,
      },
      "/": { base: "/", items: homeSideBar },
    }),
  },
});
