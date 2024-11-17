import { useEffect } from "react";
import useWindowSize from "@utils/helpers/ReactHelper";
import Head from "next/head";

function HeadPage({
  title,
  css,
  withDefaultCss = false,
}: {
  title: string;
  css?: string;
  withDefaultCss?: boolean;
}) {
  const { isMobile } = useWindowSize();

  return (
    <Head>
      {/* Dynamic title */}
      <title>{`${title} | ${process.env.NEXT_PUBLIC_APPNAME ?? "APP"}`}</title>

      {/* Default CSS */}
      {withDefaultCss && (
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/table/ListingDesktop.css"
        />
      )}

      {/* Dynamic viewport meta */}
      <meta
        name="viewport"
        content={
          isMobile
            ? "initial-scale=1, maximum-scale=1"
            : "width=device-width, initial-scale=1"
        }
      />

      {/* Page-specific CSS */}
      {css && (
        <link rel="stylesheet" type="text/css" href={`/css/${css}`} />
      )}

      {/* Preconnect for Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Preload critical fonts */}
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;1,400&family=DM+Serif+Display:ital@0;1&display=swap"
      />

      {/* Load Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;1,400&family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />

    </Head>
  );
}

export default HeadPage;
