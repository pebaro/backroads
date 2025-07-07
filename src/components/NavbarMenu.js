import {NavbarMenuItem} from "./MenuListItems"
import { navbarMenu } from "../data/menus"

const NavbarMenu = () => {
  return (
    <>
      {
        navbarMenu.map(
          menuItem => <NavbarMenuItem {...menuItem} key={menuItem.ID} />
        )
      }
    </>
  )
}

export default NavbarMenu
