import { Html, Head, Main, NextScript } from "next/document";
import { landingImageUri } from "../components/imageStrings";
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
        <meta itemProp="image" content="/images/featured-image.jpg" />

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
        <meta property="og:image" content="/images/featured-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rishabh Ajay's portfolio website" />
        <meta
          name="twitter:description"
          content="A portfolio website created with Next.js and Material-UI"
        />
        <meta name="twitter:image" content="/images/featured-image.jpg" />

        <meta property="og:site_name" content="Rishabh Ajay's Portfolio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/comfortaa-v38-latin-700.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff"
          href="/fonts/comfortaa-v38-latin-700.woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/balsamiq-sans-v10-latin-regular.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff"
          href="/fonts/balsamiq-sans-v10-latin-regular.woff"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
