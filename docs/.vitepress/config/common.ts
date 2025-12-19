import type { DefaultTheme } from "vitepress";

type Item = DefaultTheme.SidebarItem | DefaultTheme.NavItemWithLink;

const enum linkType {
  EMPTY = "",
  ROOT = "/",
}

export const createPrefixedItems = <T extends Item>(
  prefix: string,
  items: readonly T[]
): T[] => {
  if (!prefix) return items as T[];

  const result = new Array(items.length);
  let i = 0;

  for (const item of items) {
    const link = item.link;
    if (link === linkType.EMPTY) {
      result[i++] = item;
      continue;
    }

    result[i++] = {
      ...item,
      link: link === linkType.ROOT ? prefix : `${prefix}${link}`,
    } as T;
  }

  return result;
};

export const createPrefixedSidebar = (
  prefix: string,
  rawSidebar: DefaultTheme.SidebarMulti
): DefaultTheme.SidebarMulti => {
  if (!prefix) return rawSidebar;

  const sidebar = {} as DefaultTheme.SidebarMulti;
  const keys = Object.keys(rawSidebar);

  for (let i = 0, len = keys.length; i < len; ++i) {
    const key = keys[i];
    const value = rawSidebar[key];

    if (Array.isArray(value)) continue;

    const prefixedKey = `${prefix}${key}`;
    const item = { ...value };

    if (item.base && item.base !== linkType.EMPTY) {
      item.base = `${prefix}${item.base}`;
    }

    sidebar[prefixedKey] = item;
  }

  return sidebar;
};
