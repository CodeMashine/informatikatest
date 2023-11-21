/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/slider.css';

function Slider({ content }) {
  return (
    <div className='slider-wrapper'>
      <div className='slider-window'>
        <div className='slider-content'>{content}</div>
      </div>
    </div>
  );
}

export default Slider;
