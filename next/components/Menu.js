import { useState, useEffect, useRef } from 'react'
import { useTransition, animated } from 'react-spring'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'

export default function Menu({
	// menuRef,
	toggleMenu,
	setToggleMenu,
	setToggleOverlay,
	links
}) {
	const onRequestClose = useRef(null)
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, false)
		return () => {
			document.removeEventListener('click', handleClickOutside, false)
		}
	}, [])

	const handleClickOutside = (e) => {
		if (onRequestClose.current && !onRequestClose.current.contains(e.target)) {
			setToggleMenu(false)
			setToggleOverlay(false)
		} else {
			return
		}
	}

	// const transitions = useTransition(toggleMenu, null, {
	// 	from: { opacity: 0 },
	// 	enter: { opacity: 1 },
	// 	leave: { opacity: 0 },
	// 	config: { duration: 200 }
	// })

	return (
		toggleMenu && (
			<div className='header__menu' ref={onRequestClose}>
				{links.map((link) => (
					<Link href={`/${link.toLowerCase()}`} key={uuidv4()}>
						<a>{link}</a>
					</Link>
				))}
			</div>
		)
	)

	// transitions.map(
	// 	({ item, key, props }) =>
	// 		item && (
	// 			<div ref={onRequestClose}>
	// 				<animated.div key={key} style={props} className='header__menu'>
	// 					{links.map((link) => (
	// 						<Link href={`/${link.toLowerCase()}`} key={uuidv4()}>
	// 							<a>{link}</a>
	// 						</Link>
	// 					))}
	// 				</animated.div>
	// 			</div>
	// 		)
	// )
}
