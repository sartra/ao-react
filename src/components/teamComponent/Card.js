import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
// import './../../Assets/css/Hero.css';

const Card = ({image, name, bio}) => {
    
    const styles = {
      p: {
       
     },
      h1: {
        margin: 20
      },
      
    };

    return (
        <div className="card" >
          <div className="bioPic">{image}</div>
          <h3 className="bioName">{name}</h3>
          <p className="bio">{bio}</p>
        </div> 
    );
}

export default Card;