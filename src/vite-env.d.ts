/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORTAL_PASSWORD?: string;
  // add more VITE_ vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
