import { useState } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import SubMenu from './SubMenu'
import Menu from '../lib/Menu'

// TODO: Nav (About, Buy, Sell, Contact)
// TODO: Direct link to: Phone / Email (icons)

export default function Header({ toggleOverlay, setToggleOverlay }) {
	const links = ['About', 'Buy', 'Sell', 'Contact']
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
		setToggleOverlay(!toggleOverlay)
	}
	return (
		<header className='header'>
			<nav>
				<Link href='/'>
					<a className='header__logo'>
						<img src={require('../public/images/logo-black_sm.png')} />
					</a>
				</Link>
				<SubMenu />
				{/* Mobile Burger Menu */}
				<div className='header__burger hide-desktop'>
					<a
						onClick={handleToggleMenu}
						className={`header__burger-link ${toggleMenu && 'open'}`}
					>
						<span></span>
						<span></span>
						<span></span>
					</a>
				</div>
				{/* Desktop Links */}
				<div className='header__links hide-mobile'>
					{links.map((link) => (
						<Link href={`/${link.toLowerCase()}`} key={uuidv4()}>
							<a>{link}</a>
						</Link>
					))}
				</div>
			</nav>
			<Menu toggleMenu={toggleMenu} links={links} />
		</header>
	)
}
