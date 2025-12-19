import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { fixSSRPlugin } from "../plugins/fixSSR";
import { fixTagsPlugin } from "../plugins/fixTags";
import { en } from "./en";
import { zh, search as zhSearch } from "./zh";

const title = "Yet Another sing-box Docs";
const description = "Yet Another sing-box Docs";
const basePath = "/sing-docs";
const iconPath = `${basePath}/icon.svg`;

const MARKDOWN_PLUGINS = [
  tabsMarkdownPlugin,
  fixTagsPlugin,
  fixSSRPlugin,
] as const;

const themeConfig = {
  socialLinks: [
    { icon: "github", link: "https://github.com/SagerNet/sing-box" },
  ],
  outline: { level: "deep" as const },
  search: {
    provider: "local" as const,
    options: { locales: zhSearch },
  },
};

const locales = {
  root: { label: "简体中文", ...zh },
  en: { label: "English", ...en },
} as const;

const viteConfig = {
  ssr: { noExternal: ["vitepress-plugin-tabs"] },
  define: { __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false" },
};

const markdownConfig = {
  config: (md: any) => MARKDOWN_PLUGINS.forEach((plugin) => md.use(plugin)),
  theme: { light: "material-theme-lighter", dark: "material-theme-darker" },
} as const;

export default defineConfig({
  title: title,
  description: description,
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  rewrites: { "zh/:rest*": ":rest*" },
  vite: viteConfig,
  head: [["link", { rel: "icon", href: iconPath }]],
  markdown: markdownConfig,
  themeConfig: themeConfig,
  locales: locales,
  base: basePath,
  ignoreDeadLinks: true,
});
