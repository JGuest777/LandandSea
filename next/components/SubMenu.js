import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SubMenu() {
	return (
		<div className='header__submenu'>
			<div className='header__submenu-desktop'>
				<a href='tel:+13214272948' className='hide-mobile'>
					<FontAwesomeIcon className='header__icons' icon='phone' size='sm' />
				</a>
				<span className='hide-mobile'>(321) 427-2948</span>
			</div>

			<div className='header__submenu-mobile'>
				<a href='tel:+13214272948' className='hide-desktop'>
					<FontAwesomeIcon className='header__icons' icon='mobile-alt' />
				</a>
				<a href='mailto:barbara@remax.net' className='hide-desktop'>
					<FontAwesomeIcon className='header__icons' icon='envelope' />
				</a>
			</div>
		</div>
	)
}
