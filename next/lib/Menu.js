import { useTransition, animated } from 'react-spring'
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
						{links.map((link, index) => (
							<Link href={`/${link.toLowerCase()}`} key={index}>
								<a>{link}</a>
							</Link>
						))}
					</div>
				</animated.div>
			)
	)
}
