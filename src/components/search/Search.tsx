/////////// IMPORTS
///
import styles from "./Search.module.css"
import { BsSearch } from "react-icons/bs"
import { hColors } from "../../helpers/hValues"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Search = () => {
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
    <form
      className={`${styles.search}`}
      style={{ border: `2px solid ${hColors.primaryLight}` }}
    >
      <label htmlFor="search">
        <BsSearch color={hColors.primaryLight} />
      </label>
      <input
        id="search"
        type="search"
        placeholder="بحث"
        className={styles.search__input}
      />
    </form>
  )
}
