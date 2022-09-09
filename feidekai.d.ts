import { Plugin } from "vite";
import { VitePluginOptions } from "vite-plugin-style-import";

export declare function createStyleImportPlugin(
  options: VitePluginOptions
): Plugin;

export declare module "glamor/lib/hash;";
declare module "vue" {
  interface ButtonsCustomProps {
    hello?: string;
  }
}

export {};
