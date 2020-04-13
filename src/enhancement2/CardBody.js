import React from 'react';

const CardBody = ({ contact, style }) => {
  for (let i = 0; i < 1000; i++) {
    console.log('Computational cost for CardBody');
  }
  return (
    <div style={style}>
      <h6>High Computational cost</h6>
      <h5>{`Owner: ${contact}`}</h5>
    </div>
  );
};

export default React.memo(CardBody);
