import React from 'react';

const CardBody = ({ contact }) => {
  for (let i = 0; i < 1000; i++) {
    console.log('Computational cost for CardBody');
  }
  return (
    <div
      style={{
        border: '1px solid',
        margin: '6px',
        padding: '6px',
        color: 'white',
        'background-color': 'rgb(255, 0, 0)',
      }}
    >
      <h5>High Computational cost</h5>
      <h6>{`Owner: ${contact}`}</h6>
    </div>
  );
};

export default CardBody;
