import { useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
	button: {
		color: 'white',
		width: '100%'
	},
	input: {
		display: 'none'
	}
})

function Menu({ classes, links, toggleMenu, setToggleMenu, setToggleOverlay }) {
	const menuRef = useRef()

	useEffect(() => {
		if (!toggleMenu) return
		function handleCLick(e) {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setToggleMenu(false)
				setToggleOverlay(false)
			}
		}
		window.addEventListener('click', handleCLick)
		return () => window.removeEventListener('click', handleCLick)
	}, [toggleMenu])

	return links.map(
		(link) =>
			link && (
				<div style={{ textAlign: 'center' }}>
					<Link href={`/${link.toLowerCase()}`} key={uuidv4()}>
						<Button size='large' className={classes.button}>
							{link}
						</Button>
					</Link>
				</div>
			)
	)
}

export default withStyles(styles)(Menu)
