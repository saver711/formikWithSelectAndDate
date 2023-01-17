/////////// IMPORTS
///
import styles from "./Nav.module.css"
import logo from "../../assets/react.svg"
import { Search } from "../search/Search"
import { FiSettings } from "react-icons/fi"
import { HiOutlineBell } from "react-icons/hi"
import { hColors } from "../../helpers/hValues"
import { Profile } from "../profile/Profile"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Nav = () => {
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
    <nav className={styles.nav}>
      <div className={styles.nav__logoContainer}>
        <img src={logo} alt="logo" />
      </div>

      <div className={`${styles.nav__Left}`}>
        <div className={`${styles.nav__search}`}>
          <Search />
        </div>

        <div className={`${styles.nav__icons}`}>
          <FiSettings color={hColors.redish} />
          <span
            className={styles.nav__icons_divider}
            style={{ color: hColors.primaryLight }}
          >
            |
          </span>
          <HiOutlineBell color={hColors.redish} />
        </div>

        <div className={`${styles.nav__profile}`}>
          <Profile />
        </div>
      </div>
    </nav>
  )
}
