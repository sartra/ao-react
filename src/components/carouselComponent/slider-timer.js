import React, { Component } from 'react';
import {render} from 'react-dom'

const ImagesSlider = props  => {
  
  window.setTimeout(() => {
  props.slideFunction(),
  }, 5000);

  const style = {
    backgroundImage: url(${props.url})
  }

}

export default ImagesSlider;