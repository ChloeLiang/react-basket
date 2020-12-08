import React, { FC } from 'react';

const Heading: FC = (props) => {
  return <h1 className="Heading">{props.children}</h1>;
};

export default Heading;
