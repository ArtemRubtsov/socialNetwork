import classes from './MyPost.module.css'
import ava from '../../../../ava1.jpg'

type PropsType = {
    message: string;
}

export const MyPost = (props: PropsType) => {
  return (
    <div className={classes.item}>
                <img src={ava} alt="" />
              {props.message}
              <div>
              <span>like</span>
              </div>
              
    </div>
  )
}
