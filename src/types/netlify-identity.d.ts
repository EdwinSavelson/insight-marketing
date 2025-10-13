declare global {
  interface Window {
    netlifyIdentity: {
      init: () => void;
      open: () => void;
      on: (event: string, callback: (user?: any) => void) => void;
    };
  }
}

export {};
