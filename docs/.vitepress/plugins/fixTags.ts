import type MarkdownIt from "markdown-it";

const CODE_TAG_REGEX = /<code([^>]*)><code>/g;

const fixCodeTags = (content: string): string =>
  content.replace(CODE_TAG_REGEX, "<code$1></code>");

const createTagFixingRenderer =
  (defaultRender?: any) =>
  (tokens: any[], idx: number, options: any, env: any, self: any) => {
    tokens[idx].content = fixCodeTags(tokens[idx].content);
    return defaultRender
      ? defaultRender(tokens, idx, options, env, self)
      : tokens[idx].content;
  };

export function fixTagsPlugin(md: MarkdownIt): void {
  const defaultRender =
    md.renderer.rules.html_block || md.renderer.rules.html_inline;

  md.renderer.rules.html_block = createTagFixingRenderer(defaultRender);
  md.renderer.rules.html_inline = createTagFixingRenderer(defaultRender);

  const originalParse = md.parse;
  md.parse = (src: string, env?: any) =>
    originalParse.call(md, fixCodeTags(src), env);
}
