import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SubMenu() {
	return (
		<div className='submenu'>
			<div className='submenu__mobile hide-desktop'>
				<a href='tel:+13214272948'>
					<FontAwesomeIcon className='submenu__icons' icon='mobile-alt' />
				</a>
				<a href='mailto:barbara@remax.net'>
					<FontAwesomeIcon className='submenu__icons' icon='envelope' />
				</a>
			</div>
			<div className='submenu__desktop hide-mobile'>
				<a href='tel:+13214272948' id='desktop-phone'>
					<FontAwesomeIcon className='submenu__icons' icon='phone' />
				</a>
				<p>(321) 427-2948</p>
			</div>
		</div>
	)
}
