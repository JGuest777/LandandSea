import Head from 'next/head';
import styles from '../styles/Home.module.css';
import sanityClient from '../client';
import { useState, useEffect } from 'react';

const query = `*[_type == 'photo']{
	_id,
  title,
  "image": Image.asset->{
    url,
    metadata{
			dimensions{aspectRatio},
    	lqip,
  }
}
}`;

export default function Home({ photos }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let imgDelay = setTimeout(() => setLoaded(true), 1000);
    return () => {
      clearTimeout(imgDelay);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Land and Sea</h1>

        {photos.map((photo) => (
          <div key={photo._id} style={{ width: '100%' }}>
            <h3>{photo.title}</h3>
            <figure
              className="lqip__photo"
              style={{
                position: 'relative',
                margin: 0,
                width: '100%',
                background: 'transparent',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${photo.image.metadata.lqip})`,
                backgroundSize: 'cover',
                paddingTop: `calc(100% / ${photo.image.metadata.dimensions.aspectRatio})`,
              }}
            >
              <img
                src={`${photo.image.url}`}
                style={{
                  opacity: loaded ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  transition: 'opacity 1s ease-in',
                }}
              />
            </figure>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const photos = await sanityClient.fetch(query);

  return {
    props: { photos },
  };
}
