import React from 'react';

const CardBody = ({ contact, onHover }) => {
  for (let i = 0; i < 1000; i++) {
    console.log('Computational cost for CardBody');
  }
  return (
    <div
      style={{
        margin: '12px',
        padding: '6px',
        color: 'rgb(255, 0, 0)',
        backgroundColor: '#F0F0F0',
      }}
      onMouseEnter={onHover}
    >
      <h6>High Computational cost</h6>
      <h5>{`Owner: ${contact}`}</h5>
    </div>
  );
};

export default CardBody;
