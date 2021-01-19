import Head from 'next/head';
import Layout from '../layouts/MainLayout';
import '../lib/fontAwesome';
import '../styles/style.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Land & Sea Homesgroup | Re/Max Aerospace Realty</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// TODO: Landing Page:
// Hero - Image & Listing Search (API)
// Buy / Sell (home worth?) C2A's
// Why?
// Featured Listings
// Testimonials (Sanity)
