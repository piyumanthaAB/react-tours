const Nav = () => {
    return (
        <div className="nav">
        
        <div className="nav__brand">
          
            <img src="./img/sri-tours-logo.png" className="nav__logo" alt=""/>
          
          <h1>Sri Tours</h1>
        </div>

        <div className="nav__right">

          <div className="nav__links">
            <ul>
            
              
              <li className="nav__item"><a  href="#">News </a></li>
              <li className="nav__item"><a  href="#">Destinations </a></li>
              <li className="nav__item"><a  href="#">Bolg </a></li>
              <li className="nav__item"><a  href="#">Contact </a></li>
              
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