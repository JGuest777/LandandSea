import Head from 'next/head'
// import sanityClient from '../client'
import Hero from '../components/Hero'

// const query = `*[_type == 'photo']{
// 	_id,
//   title,
//   "image": Image.asset->{
//     url,
//     metadata{
// 			dimensions{aspectRatio},
//     	lqip,
//   }
// }
// }`

// photo.image.url
// photo.image.metadata.lqip
// photo.image.metadata.dimensions.aspectRatio

export default function Home() {
	return (
		<div>
			<Head></Head>
			<Hero />
		</div>
	)
}

// export async function getStaticProps(ctx) {
// 	const photos = await sanityClient.fetch(query)

// 	return {
// 		props: { photos }
// 	}
// }
