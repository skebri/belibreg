import React from 'react';
import './Title.scss';

const Title = ({ text }) =>

<div className="title-class">
  <div className="line"></div><h1 className="title-class-h1">{ text }</h1><div className="line"></div>
</div>

export default Title;
