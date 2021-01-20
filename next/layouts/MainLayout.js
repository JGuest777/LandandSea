import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect, useRef } from 'react'

export default function MainLayout({ children }) {
	const [toggleOverlay, setToggleOverlay] = useState(false)

	// sets visibility 'hidden' for overlay div on page load to prevent FOUC
	const loaded = useRef(null)
	useEffect(() => {
		loaded.current.classList.add('has-fade')
	}, [loaded])

	return (
		<>
			<div
				ref={loaded}
				className={`${toggleOverlay ? 'fade-in' : 'fade-out'} overlay`}
			/>
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
