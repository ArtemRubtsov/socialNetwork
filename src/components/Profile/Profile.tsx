import classes from '../Profile/Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'

export const Profile = () => {
  return (
    <div className={classes.content}>
          <div>
            <img src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg' />
          </div>
          <div>ava + description</div>
          
          <MyPosts />
        </div>
  )
}
