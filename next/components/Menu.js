import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'

export default function Menu({ links }) {
	return links.map(
		(link) =>
			link && (
				<Link href={`/${link.toLowerCase()}`} key={uuidv4()}>
					<a>{link}</a>
				</Link>
			)
	)
}
