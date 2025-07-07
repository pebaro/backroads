export const NavbarMenuItem = ({href, linktext}) => {
  return (
    <li>
      <a href={href} className="nav-link"> {linktext} </a>
    </li>
  )
}

export const FooterMenuItem = ({href, linktext}) => {
  return (
    <li>
      <a href={href} className="footer-link"> {linktext} </a>
    </li>
  )
}
