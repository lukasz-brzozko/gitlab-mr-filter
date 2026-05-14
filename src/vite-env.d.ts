/// <reference types="vite/client" />

declare module "*.scss" {
  const content: string;
  export default content;
}

interface Gon {
  current_username: string;
}

declare global {
  var unsafeWindow: Window & {
    gon: Gon;
  };
}

// Userscript API types
declare function GM_addStyle(css: string): void;

export {};
