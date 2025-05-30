// src/types/react-native-html-to-pdf.d.ts

declare module "react-native-html-to-pdf" {
  interface PDFOptions {
    html: string;
    fileName?: string;
    directory?: string;
    base64?: boolean;
    landscape?: boolean;
    height?: number;
    width?: number;
    footerHeight?: number;
    headerHeight?: number;
    password?: string;
    fit?: boolean;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
  }

  const convert: (options: PDFOptions) => Promise<{ filePath: string }>;

  export { convert };
}
