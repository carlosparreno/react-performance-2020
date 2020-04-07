import React from 'react';

const Card = function Card({ title, contact, likes, update }) {
  const handleOnClick = () => {
    update(title);
  };
  console.log('Computational cost: ', title);

  return (
    <div className="Card">
      <h4>{title}</h4>
      <h6>{contact}</h6>
      {likes !== undefined && <span>{`Likes: ${likes}`}</span>}
      <button onClick={handleOnClick}>+1</button>
    </div>
  );
};

export default Card;
