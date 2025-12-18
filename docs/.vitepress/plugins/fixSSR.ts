import type MarkdownIt from "markdown-it";

export function fixSSRPlugin(md: MarkdownIt) {
  const originalParse = md.parse.bind(md);

  md.parse = (src: string, env: any) => {
    src = src.replace(/<code([^>]*)><code>/g, "<code$1></code>");

    src = src.replace(
      /window\.crypto\.getRandomValues/g,
      '(typeof window !== "undefined" ? window.crypto.getRandomValues : (() => {}))'
    );

    src = src.replace(
      /document\.getElementById/g,
      '(typeof document !== "undefined" ? document.getElementById : (() => {}))'
    );

    src = src.replace(
      /(<script>[\s\S]*?)(generate\(\);)([\s\S]*?<\/script>)/g,
      '$1if (typeof window !== "undefined") { $2 }$3'
    );

    return originalParse(src, env);
  };
}
