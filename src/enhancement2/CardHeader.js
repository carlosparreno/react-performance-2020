import React from 'react';

const CardHeader = ({ title }) => {
  console.log('Computational cost for CardHeader');
  return <h4>{title}</h4>;
};

export default React.memo(CardHeader);
