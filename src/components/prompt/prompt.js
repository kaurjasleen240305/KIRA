import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/outline'; // Import the ArrowUpIcon from Heroicons

const PromptBox = () => {
  return (
    <div className="fixed bottom-6 left-60 right-60 bg-white border border-gray-300 rounded-lg flex items-center p-4">
      <input
        type="text"
        className="flex-1 mr-2 py-2 px-4 border border-gray-400 rounded-l-lg focus:outline-none"
        placeholder="Ask your doubt here"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
        <ArrowUpIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default PromptBox;
