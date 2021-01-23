import { useState, useRef } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import SubMenu from './SubMenu'
import Remax from './Remax'
import Menu from './Menu'

export default function Header({ toggleOverlay, setToggleOverlay }) {
	const links = ['About', 'Buy', 'Sell', 'Contact']
	const [toggleMenu, setToggleMenu] = useState(false)
	// const menuRef = useRef(null)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
		setToggleOverlay(!toggleOverlay)
	}

	return (
		<header className='header'>
			<nav>
				<Link href='/'>
					<a className='header__logo'>
						<img src={require('../public/images/logo-white_sm.png')} />
					</a>
				</Link>
				<SubMenu />
				{/* Mobile Burger Menu */}
				<button
					onClick={handleToggleMenu}
					className={`header__burger ${toggleMenu && 'open'} hide-desktop`}
				>
					<div />
					<div />
					<div />
				</button>

				{/* Desktop Links */}
				<div className='header__links hide-mobile'>
					{links.map((link) => (
						<Link href={`/${link.toLowerCase()}`} key={uuidv4()}>
							<a>{link}</a>
						</Link>
					))}
				</div>
			</nav>
			<Remax />

			<Menu
				links={links}
				toggleMenu={toggleMenu}
				setToggleMenu={setToggleMenu}
				setToggleOverlay={setToggleOverlay}
			/>
		</header>
	)
}
