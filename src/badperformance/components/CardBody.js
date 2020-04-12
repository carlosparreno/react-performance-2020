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
        backgroundColor: 'rgb(255, 0, 0)',
      }}
    >
      <h6>High Computational cost</h6>
      <h5>{`Owner: ${contact}`}</h5>
    </div>
  );
};

export default CardBody;
