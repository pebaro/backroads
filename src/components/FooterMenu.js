import { FooterMenuItem } from "./MenuListItems"
import { footerMenu } from "../data/menus"

const FooterMenu = () => {
  return (
    <>
      {
        footerMenu.map(
          menuItem => <FooterMenuItem {...menuItem} key={menuItem.ID} />
        )
      }
    </>
  )
}

export default FooterMenu
