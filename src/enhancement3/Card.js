import React, { useState, useCallback } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const style = {
  margin: '12px',
  padding: '6px',
  color: 'rgb(255, 0, 0)',
  backgroundColor: '#F0F0F0',
};

const Card = ({ title, contact, update }) => {
  const [totalLikes, setTotalLikes] = useState(0);
  const handleOnClick = () => {
    setTotalLikes(totalLikes + 1);
  };

  const onHover = useCallback(() => console.log(`${title} on hover`), [title]);

  return (
    <div className="Card">
      <CardHeader title={title} />
      <CardBody contact={contact} style={style} onHover={onHover} />
      <span>{`Likes: ${totalLikes}`}</span>
      <button onClick={handleOnClick}>+1</button>
    </div>
  );
};

export default Card;
