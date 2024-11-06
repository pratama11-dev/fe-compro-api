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
      <title>{`${title} | ${process.env.NEXT_PUBLIC_APPNAME ?? "APP"}`}</title>
      {withDefaultCss && (
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/table/ListingDesktop.css"
        />
      )}
      {isMobile && (
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
      )}
      {css && (
        <link rel="stylesheet" type="text/css" href={`/css/${css}`} />
      )}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;1,400&family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

export default HeadPage;
