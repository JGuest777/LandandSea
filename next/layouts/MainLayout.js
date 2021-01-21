import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import Overlay from './Overlay'

export default function MainLayout({ children }) {
	const [toggleOverlay, setToggleOverlay] = useState(false)

	return (
		<>
			<Overlay toggleOverlay={toggleOverlay} />
			<div className='content'>
				<Header
					toggleOverlay={toggleOverlay}
					setToggleOverlay={setToggleOverlay}
				/>
				<div>{children}</div>
			</div>
			<Footer />
		</>
	)
}
