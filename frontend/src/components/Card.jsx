import React from "react";

const Card = ({ card }) => {
  return (
    <div className="w-24 h-32 border bg-white text-slate-800 rounded-lg shadow-md flex flex-col items-center justify-items-start text-xl animate-deal">
      <p className="flex justify-end">{card.rank}</p>
      <h1 className="text-6xl">{card.suit}</h1>
    </div>
  );
};

export default Card;
