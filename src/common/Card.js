import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = ({ title, contact, likes, update }) => {
  const handleOnClick = () => {
    update(title);
  };
  console.log('Computational cost: ', title);

  return (
    <div className="Card">
      <CardHeader title={title} />
      <CardBody contact={contact} />
      {likes !== undefined && <span>{`Likes: ${likes}`}</span>}
      <button onClick={handleOnClick}>+1</button>
    </div>
  );
};

export default Card;
