import React from 'react';
import CellProps from './Cell.types';

const Cell = ({ dataKey, classPrefix, children }: CellProps) => (
  <li className={`sentence__${classPrefix}`} data-key={dataKey}>
    {children}
  </li>
);

Cell.defaultProps = {
  children: <></>,
};

export default Cell;
