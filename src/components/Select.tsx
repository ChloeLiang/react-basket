import React, { FC } from 'react';

interface Props {
  id: string;
  options: number[];
}

const Select: FC<Props> = (props) => {
  const { id, options } = props;
  return (
    <select className="Select" id={id} name={id}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
