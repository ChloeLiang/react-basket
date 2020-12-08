import React, { FC } from 'react';

interface Props {
  id: string;
  label: string;
}

const Checkbox: FC<Props> = (props) => {
  const { id, label } = props;
  return (
    <div className="Checkbox">
      <input type="checkbox" id={id} name={id} />
      <label className="Checkbox__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
