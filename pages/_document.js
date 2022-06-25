import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="robots" content="index, nofollow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="title" content="Rishabh Ajay's portfolio website" />
        <meta
          name="description"
          content="A portfolio website created with Next.js and Material-UI"
        />
        <meta
          name="keywords"
          content="portfolio, next.js, react, material-ui, engineering, software, website, web development"
        />
        <meta
          property="url"
          content="https://portfolio-rishabhajay.vercel.app/"
        />

        <meta itemProp="name" content="Rishabh Ajay's portfolio website" />
        <meta
          itemProp="description"
          content="A portfolio website created with Next.js and Material-UI"
        />
        <meta itemProp="image" content="/featured-image.jpg" />

        <meta
          property="og:url"
          content="https://portfolio-rishabhajay.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rishabh Ajay's portfolio website" />
        <meta
          property="og:description"
          content="A portfolio website created with Next.js and Material-UI"
        />
        <meta property="og:image" content="/featured-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rishabh Ajay's portfolio website" />
        <meta
          name="twitter:description"
          content="A portfolio website created with Next.js and Material-UI"
        />
        <meta name="twitter:image" content="/featured-image.jpg" />

        <meta property="og:site_name" content="Rishabh Ajay's Portfolio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
