import logo from '../images/logo.svg'
import MenuIcons from './MenuIcons'
import NavbarMenu from './NavbarMenu'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* left this comment on purpose */}

        <ul className="nav-links" id="nav-links">
          {<NavbarMenu />}
        </ul>

        <ul className="nav-icons">
          {<MenuIcons />}
        </ul>

      </div>
    </nav>
  )
}

export default Navbar