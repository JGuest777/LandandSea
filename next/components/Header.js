import Link from 'next/link';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// TODO: Nav (About, Buy, Sell, Contact)
// TODO: Direct link to: Phone / Email (icons)

export default function Header() {
  const tabs = ['About', 'Buy', 'Sell', 'Contact'];

  return (
    <header className="header">
      {/* Mobile Icons */}
      <div className="header__icons">
        <a href="tel:+13214272948" rel="nofollow">
          <FontAwesomeIcon className="icons hide-desktop" icon={faMobileAlt} />
        </a>
        <a href="mailto:barbara@remax.net">
          <FontAwesomeIcon className="icons hide-desktop" icon={faEnvelope} />
        </a>
      </div>

      <nav>
        <Link href="/">
          <a className="header__logo">
            <img src={require('../public/images/logo-black_sm.png')} />
          </a>
        </Link>
        {/* Mobile */}
        <div className="header__menu hide-desktop">
          <span></span>
          <span></span>
          <span></span>
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
