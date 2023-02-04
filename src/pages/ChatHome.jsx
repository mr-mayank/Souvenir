import React from 'react'
import Chat from '../chat-components/Chat';
import Slidebar from '../chat-components/Slidebar';

const ChatHome = () => {
  return (
    <div className="home">
        <div className="container">
        <Slidebar />
        <Chat />
        </div>
    </div>

  );
}

export default ChatHome;