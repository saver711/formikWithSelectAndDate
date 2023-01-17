/////////// IMPORTS
///
import styles from './Profile.module.css'
import avatar from "../../assets/default_profile.png"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Profile = ()=>{
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
  <div className={styles.profile}>
    <img src={avatar} alt="profile" className={styles.profile__img} />
    <div className={`${styles.profile__text}`}>
      <h5 className={`${styles.profile__name}`}>خالد عليش</h5>
      <h6 className={`${styles.profile__profession}`}>مدير مصنع</h6>
    </div>
  </div>
)
}