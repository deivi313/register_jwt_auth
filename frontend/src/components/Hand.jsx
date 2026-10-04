import React from "react";
import Card from "./Card";

const Hand = ({ cards, title, handValue }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-2">
        {title}:{handValue}
      </h2>
      <div className="flex flex-column sm:flex-row gap-1">
        {cards.map((cards, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Hand;
