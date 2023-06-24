import React, { useState } from "react";

const Avatar = ({ imageUrl }) => (
  <img
    src={imageUrl}
    alt="Avatar"
    className="w-10 h-10 rounded-full object-cover"
  />
);

const ChatBubble = ({ content, sender }) => {
  const isUser = sender === "user";
  const bubbleStyles = isUser
    ? "bg-[#505f2f] text-[#c88572]"
    : "bg-[#c88572] text-[#f7ebdb]";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mt-16` } >
      <div className={`max-w-xs rounded-lg p-4 ${bubbleStyles}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const ChatComponent = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, content: "Hey, how are you?", sender: "user" },
    { id: 2, content: "I'm good, thanks!", sender: "other" },
    { id: 3, content: "Do you have any plans for the weekend?", sender: "user" },
    { id: 4, content: "Not yet. Any suggestions?", sender: "other" },
    // Add more sample messages here
  ]);
  const friends = [
    { id: 1, name: "John Doe", avatarUrl: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Jane Smith", avatarUrl: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" },
    // Add more friends here
  ];

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        content: inputMessage,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <div className="flex h-screen mt-16">
      <div className="w-1/4 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Friends</h2>
        <ul className="space-y-4">
          {friends.map((friend) => (
            <li key={friend.id} className="flex items-center space-x-4">
              <Avatar imageUrl={friend.avatarUrl} />
              <span>{friend.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 px-4 py-8 overflow-y-auto">
          {messages.map((message) => (
            <React.Fragment key={message.id}>
              <ChatBubble content={message.content} sender={message.sender} />
              <div className="mb-4"></div>
            </React.Fragment>
          ))}
        </div>
        <div className="border-t-2 border-gray-200 p-4">
          <div className="flex items-center">
            <Avatar imageUrl="https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
            <input
              type="text"
              className="flex-1 ml-4 px-4 py-2 rounded-full bg-gray-200 focus:outline-none"
              placeholder="Type a message..."
              value={inputMessage}
              onChange={handleInputChange}
            />
            <button
              className="ml-4 px-4 py-2 rounded-full bg-[#505f2f] text-[#c88572] font-semibold"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
