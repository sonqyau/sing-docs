import type { Theme } from "vitepress";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import DefaultTheme from "vitepress/theme";

const enhanceApp = ({ app }: { app: any }) => {
  enhanceAppWithTabs(app);
};

export default {
  extends: DefaultTheme,
  enhanceApp,
} satisfies Theme;
