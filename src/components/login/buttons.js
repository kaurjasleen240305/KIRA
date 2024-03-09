import React from 'react';

function Button({ logo, text }) {
  return (
    <button className="flex items-center justify-evenly bg-yellow-300 bg-opacity-50 rounded-full py-4 px-8 font-normal border border-black" style={{ width: "400px" }}>
      {logo && <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />}
      <span className="text-xl">{text}</span>
    </button>
  );
}

export default Button;
