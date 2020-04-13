import React, { useState } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = ({ title, contact, update }) => {
  const [totalLikes, setTotalLikes] = useState(0);
  const handleOnClick = () => {
    setTotalLikes(totalLikes + 1);
  };
  console.log('Computational cost: ', title);

  return (
    <div className="Card">
      <CardHeader title={title} />
      <CardBody
        contact={contact}
        style={{
          border: '1px solid',
          margin: '6px',
          padding: '6px',
          color: 'white',
          backgroundColor: 'rgb(255, 0, 0)',
        }}
      />
      <span>{`Likes: ${totalLikes}`}</span>
      <button onClick={handleOnClick}>+1</button>
    </div>
  );
};

export default Card;
