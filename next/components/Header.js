import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// TODO: Nav (About, Buy, Sell, Contact)
// TODO: Direct link to: Phone / Email (icons)

export default function Header({ toggleOverlay, setToggleOverlay }) {
  const tabs = ['About', 'Buy', 'Sell', 'Contact'];
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    setToggleOverlay(!toggleOverlay);
  };
  return (
    <header className="header">
      <nav>
        <Link href="/">
          <a className="header__logo">
            <img src={require('../public/images/logo-black_sm.png')} />
          </a>
        </Link>

        <div className="header__submenu">
          {/* Desktop contact  */}
          <div className="header__submenu-desktop">
            <a href="tel:+13214272948" className="hide-mobile">
              <FontAwesomeIcon
                className="header__icons"
                icon="phone"
                size="sm"
              />
            </a>
            <span className="hide-mobile">(321) 427-2948</span>
          </div>
          {/* Mobile contact */}
          <div className="header__submenu-mobile">
            <a href="tel:+13214272948" className="hide-desktop">
              <FontAwesomeIcon className="header__icons" icon="mobile-alt" />
            </a>
            <a href="mailto:barbara@remax.net" className="hide-desktop">
              <FontAwesomeIcon className="header__icons" icon="envelope" />
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="header__burger hide-desktop">
          <a
            onClick={handleToggleMenu}
            className={`header__burger-link ${toggleMenu && 'open'}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        {/* Desktop */}
        <div className="header__links hide-mobile">
          {tabs.map((tab, index) => (
            <Link href={`/${tab.toLowerCase()}`} key={index}>
              <a>{tab}</a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
