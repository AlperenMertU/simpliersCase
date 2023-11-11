import React from 'react'
import FriendsMessage from './minComponent/FriendsMessage'
import MyMessages from './minComponent/MyMessages'

function MessagesSection({ messages}) {
  return (

    <div>

      <FriendsMessage />


      <div>
        {messages.map((message, index) => (
         
            <MyMessages key={index} text={message.text} />
       
        ))}
      </div>

    </div>

  )
}

export default MessagesSection