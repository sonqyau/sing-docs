import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { fixSSRPlugin } from "../plugins/fixSSR";
import { fixTagsPlugin } from "../plugins/fixTags";
import { en } from "./en";
import { zh, search as zhSearch } from "./zh";

export default defineConfig({
  title: "Yet Another sing-box Docs",
  description: "Yet Another sing-box Docs",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  rewrites: {
    "zh/:rest*": ":rest*",
  },

  vite: {
    ssr: {
      noExternal: ["vitepress-plugin-tabs"],
    },
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
    },
  },

  head: [["link", { rel: "icon", href: "/sing-docs/icon.svg" }]],

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
      md.use(fixTagsPlugin);
      md.use(fixSSRPlugin);
    },
    theme: {
      light: "material-theme-lighter",
      dark: "material-theme-darker",
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/SagerNet/sing-box" },
    ],

    outline: {
      level: "deep",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          ...zhSearch,
        },
      },
    },
  },

  locales: {
    root: { label: "简体中文", ...zh },
    en: { label: "English", ...en },
  },

  base: "/sing-docs",

  ignoreDeadLinks: true,
});
