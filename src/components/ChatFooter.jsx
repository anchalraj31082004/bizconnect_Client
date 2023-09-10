import React, { useState } from "react";

const ChatFooter = ({socket}) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };
  
  return (
    <div className=" p-4 bg-gray-100 border-t">
      <form className="flex items-center" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className=" p-2 rounded-full w-3/4 border mr-2 text-slate-800"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className=" bg-blue-500 text-white p-2 rounded-full">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
