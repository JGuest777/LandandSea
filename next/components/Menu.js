import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

export default function Menu({
  links,
  toggleMenu,
  setToggleMenu,
  setToggleOverlay,
}) {
  const menuRef = useRef();

  useEffect(() => {
    if (!toggleMenu) return;
    function handleCLick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggleMenu(false);
        setToggleOverlay(false);
      }
    }
    window.addEventListener('click', handleCLick);
    return () => window.removeEventListener('click', handleCLick);
  }, [toggleMenu]);

  return links.map(
    (link) =>
      link && (
        <Link href={`/${link.toLowerCase()}`} key={uuidv4()}>
          <a ref={menuRef}>{link}</a>
        </Link>
      )
  );
}
