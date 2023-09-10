import React from 'react';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatPage = ({socket}) => {
  return (
    <section id="chat">
            <ChatBody />
            <ChatFooter socket={socket}/>
    </section>
  );
};

export default ChatPage;