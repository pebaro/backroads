import MenuIcons from './MenuIcons'
import FooterMenu from './FooterMenu'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {<FooterMenu />}
      </ul>

      <ul className="footer-icons">
        {<MenuIcons />}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>  
  )
}

export default Footer 