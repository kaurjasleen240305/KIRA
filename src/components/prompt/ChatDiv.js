import React from 'react';
import ChatBox from './ChatBox';

const ChatDiv = () => {
  return (
    <div className="flex bg-green-200 absolute bottom-28 px-16 w-full">
      <ChatBox message={"jkrnvjenrvknrlhbrjvnrhbhrbrbg"} initialColor={"yellow"} alignment={"left"}/>
    </div>
  );
};

export default ChatDiv;
