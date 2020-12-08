import React, { FC } from 'react';

const Paragraph: FC = (props) => {
  return <p className="Paragraph">{props.children}</p>;
};

export default Paragraph;
