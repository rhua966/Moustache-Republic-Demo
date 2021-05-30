import React, {useState} from 'react'

import classes from './Header.module.css';

const Header: React.FC = () => {
  const [displayMiniCart, setDisplayMiniCart] = useState(false);

  const toggleDispalyMiniCart = () => {

  }

  return (
    <header className={classes.header}>
      {displayMiniCart && (
        <div className={classes.header__cart}></div>
      )}
      <div className={classes.header__button}>
        <div className={classes["header__button-text"]}>{ `My Cart`}</div>
      </div>
    </header>
  )
}

export default Header;