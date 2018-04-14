import React, { Component } from 'react';


const ImageSlide = ({ url }) => {
  console.log('URL', url)

  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '900px',
    width: '1000px',
    margin: '0 auto',
    transition: 'background-image .3s ease-in-out',
    flex: '1'
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
}

export default ImageSlide; 