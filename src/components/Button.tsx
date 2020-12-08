import React, { FC } from 'react';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<Props> = (props) => {
  const { type } = props;
  return (
    <button className="Button" type={type || 'button'} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
