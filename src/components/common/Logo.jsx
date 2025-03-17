import React from 'react';

export default function Logo({ dark = true }) {
  return (
    <div className="flex items-center gap-2">
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 4C7.58172 4 4 7.58172 4 12V20C4 24.4183 7.58172 28 12 28H20C24.4183 28 28 24.4183 28 20V12C28 7.58172 24.4183 4 20 4H12Z" 
          fill={dark ? "#1a1a1a" : "#FFFFFF"}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M16 10C15.4477 10 15 10.4477 15 11V16C15 16.5523 15.4477 17 16 17H20C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15H17V11C17 10.4477 16.5523 10 16 10Z" 
          fill={dark ? "#FFFFFF" : "#6366F1"}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M10 16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V16Z" 
          fill={dark ? "#FFFFFF" : "#E16B5C"}
        />
      </svg>
      <span className={`font-serif text-xl font-bold ${dark ? 'text-dark-950' : 'text-white'}`}>
        GhostChef
      </span>
    </div>
  );
}