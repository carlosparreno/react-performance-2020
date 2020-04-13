import React from 'react';

const CardBody = ({ contact, style, onHover }) => {
  for (let i = 0; i < 1000; i++) {
    console.log('Computational cost for CardBody');
  }
  return (
    <div style={style} onMouseEnter={onHover}>
      <h6>High Computational cost</h6>
      <h5>{`Owner: ${contact}`}</h5>
    </div>
  );
};

export default CardBody;
