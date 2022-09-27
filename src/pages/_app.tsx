import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";
import "@/styles/fonts.css";
import "@/styles/mdx.css";
import "@/styles/code.css";

import SEO from "~root/next-seo.config";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
