import React from 'react';
import slice from 'lodash.slice';
import './Grid.scss';

const Grid = ({ id, columnsNumber, children }) => {
  console.log('Children: ', children);

  const gridCreateRow = (row, rowKey) => {
    return (
      <div className="my-uic--row" key={rowKey}>
        {row.map((element, key) => {
          return (
            <div key={`${rowKey}-section-cell-${key}`} className="my-uic--cell">
              {element}
            </div>
          );
        })}
      </div>
    );
  };

  const gridWithColumns = () => {
    const rowNumber = Math.ceil(children.length / columnsNumber);

    const rows = [];
    for (let i = 0; i < rowNumber; i += 1) {
      const startRow = i * columnsNumber;
      const endRow = startRow + columnsNumber;
      rows.push(slice(children, startRow, endRow));
    }

    return (
      <>{rows.map((row, index) => gridCreateRow(row, `${id}-row-${index}`))}</>
    );
  };

  return <div className="my-uic--grid">{gridWithColumns()}</div>;
};

export default Grid;
