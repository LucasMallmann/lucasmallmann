import React from 'react';

type Props = {
  theme: string;
};

export default function Waves({ theme }) {
  const fillColor = theme === 'dark' ? '#111827' : '#F9FAFB';

  return (
    <div
      className="overflow-hidden w-full absolute bottom-0 right-0"
      style={{ height: '90px' }}
    >
      <svg
        preserveAspectRatio="none"
        width="1440"
        height="74"
        viewBox="0 0 1440 74"
        className="absolute w-106 bottom-0 bg-to-blue-400"
        fill={fillColor}
        style={{
          left: '-3%',
          right: '-3%',
          minWidth: '600px',
        }}
      >
        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z" />
      </svg>
    </div>
  );
}
