import type MarkdownIt from "markdown-it";

export function fixTagsPlugin(md: MarkdownIt) {
  const defaultRender =
    md.renderer.rules.html_block || md.renderer.rules.html_inline;

  const fixTags = (content: string): string => {
    return content.replace(/<code([^>]*)><code>/g, "<code$1></code>");
  };

  md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    token.content = fixTags(token.content);

    if (defaultRender) {
      return defaultRender(tokens, idx, options, env, self);
    }
    return token.content;
  };

  md.renderer.rules.html_inline = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    token.content = fixTags(token.content);

    if (defaultRender) {
      return defaultRender(tokens, idx, options, env, self);
    }
    return token.content;
  };

  const originalParse = md.parse.bind(md);
  md.parse = (src: string, env: any) => {
    src = fixTags(src);
    return originalParse(src, env);
  };
}
