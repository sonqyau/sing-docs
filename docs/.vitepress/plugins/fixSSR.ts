import type MarkdownIt from "markdown-it";

const SSR_FIXES = [
  [
    /window\.crypto\.getRandomValues/g,
    '(typeof window!=="undefined"?window.crypto.getRandomValues:(()=>{}))',
  ],
  [
    /document\.getElementById/g,
    '(typeof document!=="undefined"?document.getElementById:(()=>{}))',
  ],
  [
    /(<script>[\s\S]*?)(generate\(\);)([\s\S]*?<\/script>)/g,
    '$1if(typeof window!=="undefined"){$2}$3',
  ],
] as const;

const applySSRFixes = (src: string): string => {
  let result = src.replace(/<code([^>]*)><code>/g, "<code$1></code>");
  for (const [pattern, replacement] of SSR_FIXES) {
    result = result.replace(pattern, replacement);
  }
  return result;
};

export function fixSSRPlugin(md: MarkdownIt): void {
  const originalParse = md.parse;
  md.parse = (src: string, env?: any) =>
    originalParse.call(md, applySSRFixes(src), env);
}
