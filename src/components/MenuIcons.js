import ListIcon from './ListIcon'
import { iconMenu } from '../data/menus'

const MenuIcons = () => {
  return (
    <>
      {
        iconMenu.map( iconListItem => 
          <ListIcon 
            {...iconListItem} 
            key={iconListItem.ID} 
          />
        )
      }
    </>
  )
}

export default MenuIcons
