import { useTransition, animated } from 'react-spring'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'

export default function Menu({ toggleMenu, links }) {
	const transitions = useTransition(toggleMenu, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 200 }
	})

	return transitions.map(
		({ item, key, props }) =>
			item && (
				<animated.div key={key} style={props}>
					<div className='header__menu'>
						{links.map((link) => (
							<Link href={`/${link.toLowerCase()}`} key={uuidv4()}>
								<a>{link}</a>
							</Link>
						))}
					</div>
				</animated.div>
			)
	)
}
