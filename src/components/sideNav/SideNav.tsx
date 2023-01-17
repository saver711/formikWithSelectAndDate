/////////// IMPORTS
///
import { useState } from "react"
import { sideNavData } from "../../helpers/hValues"
import { NavItem } from "./NavItem"
import styles from "./SideNav.module.css"
///
/////////// Types
///
type SideNavProps_TP = {
  activeItem: number
  setActiveItem: React.Dispatch<React.SetStateAction<number>>
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const SideNav = ({ activeItem, setActiveItem }: SideNavProps_TP) => {
  /////////// VARIABLES
  ///

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

  ///
  return (
    <aside className={styles.sideNav}>
      <ul className={`${styles.list}`}>
        {sideNavData.primary.map((navItem) => (
          <NavItem
            id={navItem.id}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            key={navItem.id}
            title={navItem.title}
            Icon={navItem.icon}
          />
        ))}
      </ul>
      <ul className={`${styles.list}`}>
        {sideNavData.secondary.map((navItem) => (
          <NavItem
            id={navItem.id}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            key={navItem.id}
            title={navItem.title}
            Icon={navItem.icon}
          />
        ))}
      </ul>
      <ul className={`${styles.list}`}>
        {sideNavData.extra.map((navItem) => (
          <NavItem
            id={navItem.id}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            key={navItem.id}
            title={navItem.title}
            Icon={navItem.icon}
          />
        ))}
      </ul>
    </aside>
  )
}
