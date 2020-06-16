import React from 'react';
import s from './Nav.module.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className={s.nav_links}>
        <Link className={s.navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link className={s.navStyle} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
