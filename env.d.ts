/// <reference types="vite/client" />

declare module "vue" {
  interface ComponentCustomProps {
    onClick?: (en: Event) => any;
    vModel?: string;
  }
}

export {};
