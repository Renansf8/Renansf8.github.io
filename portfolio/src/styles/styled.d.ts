import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      shadow: string;
      hover: string;
      background: string;
      card: string;
      text: string;
    };
  }
}
