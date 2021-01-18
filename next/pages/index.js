import Head from 'next/head';
import sanityClient from '../client';
import LazyImage from '../components/LazyImage';

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
  return (
    <div style={{ textAlign: 'center' }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Land and Sea</h1>

        {photos.map((photo) => (
          <div key={photo._id} style={{ width: '100%' }}>
            <h3>{photo.title}</h3>
            <LazyImage
              className={'test'}
              src={photo.image.url}
              lqip={photo.image.metadata.lqip}
              alt={'test img'}
              aspectRatio={photo.image.metadata.dimensions.aspectRatio}
            />
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
