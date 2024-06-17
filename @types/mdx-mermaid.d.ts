declare module "mdx-mermaid" {
  function plugin(config: any);

  export default plugin;
}

declare module "mdx-mermaid/Mermaid" {
  declare function Mermaid();
}
