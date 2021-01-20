import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect, useRef } from 'react'

export default function MainLayout({ children }) {
	const [toggleOverlay, setToggleOverlay] = useState(false)

	// removes overlay class on page load to prevent FOUC
	const loaded = useRef(null)
	useEffect(() => {
		loaded.current.classList.remove('overlay')
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
