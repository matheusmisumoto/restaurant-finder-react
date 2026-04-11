import "styled-components";

declare module "*.json" {
    const value: any;
    export default value;
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            blurredBackground: string;
            hoverBackground: string;
            box: string;
            text: string;
        };
        fonts: {
            regular: string;
        };
    }
}
