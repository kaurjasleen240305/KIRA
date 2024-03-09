import React, { useState } from 'react';

const ChatBox = ({ message,initialColor,alignment,heading }) => {

  return (
    <div
      className={`max-w-md mx-auto my-4 p-4 border border-black rounded-lg relative overflow-hidden text-${alignment}`}
      style={{
        background: `linear-gradient(to bottom, ${initialColor}, white)`,
      }}
    >
      <span className="border border-black mb-2 px-5 py-1 bg- font-bold tracking-wider rounded-full font-serif text-gray-700 ">{heading}</span>
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
