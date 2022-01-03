import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      purple: string;
      pink: string;
      blue: string;
      red: string;
      gray: string;
      black: string;
      white: string;
      lightPink: string;
      lightBlue: string;
    };
    size: {
      sm: string;
      md: string;
      lg: string;
    };
    weight: {
      thin: number;
      light: number;
      regular: number;
      medium: number;
      bold: number;
      black: number;
    };
  }
}
