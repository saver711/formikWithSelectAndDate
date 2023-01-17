/////////// IMPORTS
///
import { BsArrowLeftSquare } from "react-icons/bs"
import { IconType } from "react-icons/lib"
import styles from "./SideNav.module.css"
///
/////////// Types
///
type NavItemProps_TP = {
  title: string
  Icon: IconType
  id: number
  activeItem: number
  setActiveItem: React.Dispatch<React.SetStateAction<number>>
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const NavItem = ({
  title,
  Icon,
  id,
  activeItem,
  setActiveItem,
}: NavItemProps_TP) => {
  /////////// VARIABLES
  ///
  const isActive = id === activeItem
  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///
  const changeActiveItemHandler = () => setActiveItem(id)
  ///
  return (
    <li
      onClick={changeActiveItemHandler}
      className={`${styles.list__item}
      ${isActive ? styles.active : ""}
      `}
    >
      <Icon size={20} />
      <p className={styles.list__item_title}>{title}</p>
      <div className={`${styles.list__arrow}`}>
        <BsArrowLeftSquare size={14} />
      </div>
    </li>
  )
}
