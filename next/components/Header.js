import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import SubMenu from './SubMenu';
import Remax from './Remax';
import Menu from './Menu';

export default function Header({ toggleOverlay, setToggleOverlay }) {
  const links = ['About', 'Buy', 'Sell', 'Contact'];
  const [toggleMenu, setToggleMenu] = useState(false);

  const transitions = useTransition(toggleMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    setToggleOverlay(!toggleOverlay);
  };

  return (
    <header className="header">
      <nav>
        <Link href="/">
          <a className="header__logo">
            <img src={require('../public/images/logo-white_sm.png')} />
          </a>
        </Link>
        <SubMenu />
        {/* Mobile Burger Menu */}
        <button
          onClick={handleToggleMenu}
          className={`header__burger ${toggleMenu && 'open'} hide-desktop`}
        >
          <div />
          <div />
          <div />
        </button>

        {/* Desktop Links */}
        <div className="header__nav hide-mobile">
          {links.map((link) => (
            <Link href={`/${link.toLowerCase()}`} key={uuidv4()}>
              <a>{link}</a>
            </Link>
          ))}
        </div>
      </nav>
      <Remax />

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className="header__menu">
              <Menu
                links={links}
                toggleMenu={toggleMenu}
                setToggleMenu={setToggleMenu}
                setToggleOverlay={setToggleOverlay}
              />
            </animated.div>
          )
      )}
    </header>
  );
}
