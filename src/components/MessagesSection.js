import React from 'react'
import FriendsMessage from './minComponent/FriendsMessage'
import MyMessages from './minComponent/MyMessages'

function MessagesSection() {
  return (
    <div>

      <FriendsMessage />
      <MyMessages />
      <MyMessages />
      
    </div>
  )
}

export default MessagesSection