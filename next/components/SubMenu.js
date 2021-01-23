import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SubMenu() {
	return (
		<div className='submenu'>
			{/* Mobile */}
			<div className='submenu__mobile hide-desktop'>
				<a href='tel:+13214272948'>
					<FontAwesomeIcon className='submenu__icons' icon='mobile-alt' />
				</a>
				<a href='mailto:barbara@remax.net'>
					<FontAwesomeIcon className='submenu__icons' icon='envelope' />
				</a>
			</div>
			{/* Desktop */}
			<a href='tel:+13214272948' className='submenu__desktop hide-mobile'>
				<FontAwesomeIcon className='submenu__icons' icon='phone' /> (321)
				427-2948
			</a>
		</div>
	)
}
