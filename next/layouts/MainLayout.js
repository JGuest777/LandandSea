import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function MainLayout({ children }) {
  const [toggleOverlay, setToggleOverlay] = useState(false);
  return (
    <div className={`container ${toggleOverlay && 'overlay'}`}>
      <div className="content">
        <Header
          toggleOverlay={toggleOverlay}
          setToggleOverlay={setToggleOverlay}
        />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
