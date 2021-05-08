import { Link } from 'react-router-dom';
import { useState } from 'react';
const Nav = (props) => {

  

  
    return (
        <div className="nav">
        
        <div className="nav__brand">
          
            <img src="./img/fox-logo.png" className="nav__logo" alt=""/>
          
          <h1>Foxico</h1>
        </div>

        <div className="nav__right">

          <div className="nav__links">
            <ul>
            
              
              <li className={`nav__item ${(props.navActive==='tours'?'nav__item--active':'')}`}><Link to='/'>Tours</Link></li>
              <li className={`nav__item ${(props.navActive==='destinations'?'nav__item--active':'')}`}><a  href="#">Destinations </a></li>
              <li className={`nav__item ${(props.navActive==='blog'?'nav__item--active':'')}`}><a  href="/blog">Blog </a></li>
              <li className={`nav__item ${(props.navActive==='contact'?'nav__item--active':'')}`}><Link to='/contact'>Contact</Link></li>
              
            </ul>
          </div>

          <div className="nav__user">
            <button className="nav__search">
              <svg className="nav__search-icon" >
                <use xlinkHref="./../icons/symbol-defs.svg#icon-magnifying-glass"></use>
              </svg>

            </button>

            <h1 className="nav__user-name">Hello, Anney !</h1>
          </div>
        </div>



      </div>
    )
}

export default Nav;