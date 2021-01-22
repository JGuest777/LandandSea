import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SubMenu() {
	return (
		<>
			<div className='header__submenu'>
				<a href='tel:+13214272948' className='hide-desktop'>
					<FontAwesomeIcon className='header__icons' icon='mobile-alt' />
				</a>
				<a href='mailto:barbara@remax.net' className='hide-desktop'>
					<FontAwesomeIcon className='header__icons' icon='envelope' />
				</a>
				<a href='tel:+13214272948' id='desktop-phone' className='hide-mobile'>
					<FontAwesomeIcon className='header__icons' icon='phone' size='sm' />
					(321) 427-2948
				</a>
			</div>
		</>
	)
}
