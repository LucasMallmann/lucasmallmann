import React from 'react';

type Props = {
  theme: string;
};

export default function Waves({ theme }) {
  const fillColor = theme === 'dark' ? '#111827' : '#2F35CB';

  return (
    <div className="absolute w-full bottom-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2F35CB"
          fill-opacity="1"
          d="M0,128L1440,224L1440,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
