import React from 'react';

const ChatPage = () => {
  const messages = [
    { id: 1, text: "Hey, how's it going?", sender: 'user' },
    { id: 2, text: 'I am doing great! Thanks for asking.', sender: 'other' },
    { id: 3, text: 'Can you help me with something?', sender: 'user' },
    { id: 4, text: 'Of course! What do you need help with?', sender: 'other' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="border rounded-lg p-4 bg-gray-100 min-h-[calc(100vh-110px)]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 mb-2 max-w-xs ${
              msg.sender === 'user'
                ? 'bg-blue-500 text-white ml-auto rounded-lg'
                : 'bg-gray-300 mr-auto rounded-lg'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
