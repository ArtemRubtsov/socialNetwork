import React from 'react'
import classes from './MyPosts.module.css'
import { MyPost } from './MyPost/MyPost'


export const MyPosts = () => {
  return (
    <div>
          my post
          <div>
            new post
          </div>
          <div>
            <MyPost message='Hi everyone!'/>
            <MyPost message='Nice to meet you!'/>
            <MyPost message='Bye;)'/>
          </div>
    </div>
  )
}
