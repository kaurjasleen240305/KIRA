import React, { useState } from 'react';

const ChatBox = ({ message,initialColor }) => {

  return (
    <div
      className="max-w-md mx-auto my-4 p-4 border border-black rounded-lg relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${initialColor}, white)`,
      }}
    >
      <p className="text-2xl font-semibold">{message}</p>
      <button
        className="absolute bottom-0 right-0 m-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Like (0)
      </button>
    </div>
  );
};

export default ChatBox;
