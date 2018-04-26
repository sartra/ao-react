import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageSlide from "./ImageSlide";
import Arrow from "./Arrows";

import Image1 from './../../Assets/img/slides/bisankey1.png';
import Image2 from './../../Assets/img/slides/bisankey3.png';
import Image3 from './../../Assets/img/slides/bisankey7.png';
import Image4 from './../../Assets/img/slides/sun1.png';
import Image5 from './../../Assets/img/slides/sun2.png';
import Image6 from './../../Assets/img/slides/sun3.png';


const imgUrls = [
  Image1, 
  Image2,
  Image3,
  Image4,
  Image5,
  Image6
];

class Carousel extends React.Component {

  constructor (props) {
    super(props);
    
    this.state = {
      currentImageIndex: 0
    };
    
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  
  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
    this.setState({
      currentImageIndex: index
    });
  }
  
  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  componentDidMount(){
    setInterval(() => {
      this.nextSlide(); 
    }, 4000)
  }

  render () {
    return (
        <div className="carousel">
          <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
          <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
          <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
        </div>
    );
  }
}

export default Carousel;