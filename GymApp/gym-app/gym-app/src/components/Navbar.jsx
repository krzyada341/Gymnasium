import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { navItems } from '../assets/data'

const Navbar = ({ storedAuthToken, clearStorage }) => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        {navItems.map((item) => {
          return (
            <Link to={item.url} key={item.id}>
              <li>
                <i
                  className={item.icon}
                  style={{
                    fontSize: '20px',
                    marginTop: '10px',
                    marginRight: '5px',
                  }}
                ></i>
                {item.text}
              </li>
            </Link>
          )
        })}
        {storedAuthToken ? (
          <li
            onClick={() => {
              clearStorage()
            }}
          >
            <i
              className={'fa solid fa-user-minus'}
              style={{
                fontSize: '20px',
                marginTop: '10px',
                marginRight: '5px',
              }}
            ></i>
            Wyloguj się
          </li>
        ) : (
          <Link to={'login'}>
            <li>
              <i
                className={'fa solid fa-user-plus'}
                style={{
                  fontSize: '20px',
                  marginTop: '10px',
                  marginRight: '5px',
                }}
              ></i>
              Zaloguj się
            </li>
          </Link>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
