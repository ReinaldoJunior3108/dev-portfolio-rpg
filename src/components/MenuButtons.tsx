import React from 'react';

type Props = {
  onClick: () => void;
  text: string;
}

export default function MenuButtons({ onClick, text }: Props) {
  return (
    <button onClick={onClick} className="w-full text-white font-['Press_Start_2P'] bg-orange-600 border-4 border-yellow-700 rounded-md p-2 my-2 hover:bg-orange-500 transition">
      {text}
    </button>
  );
}