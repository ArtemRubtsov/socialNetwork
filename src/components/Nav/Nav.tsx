
import classes from '../Nav/Nav.module.css'


export const Nav = () => {
  return (
    <nav className={classes.nav}>
          <ul className={classes.nav}>
            <li className={classes.item}><a href="">Profile</a></li>
            <li className={classes.item}><a href="">Messages</a></li>
            <li className={classes.item}><a href="">News</a></li>
            <li className={classes.item}><a href="">Music</a></li>
            <li className={classes.item}><a href="">Settings</a></li>
          </ul>
    </nav>
  )
}
