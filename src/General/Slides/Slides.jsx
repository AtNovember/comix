// import { Component } from 'react';
// import importcss from 'importcss';
// import Slider from 'react-slick';
//
//
// // @importcss(require('./Slides.css'))
// export default class SimpleSlider extends Component {
//   // var SimpleSlider = React.createClass({
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     console.log(this.props.children);
//     return (
//       <Slider {...settings}>
//         {this.props.children}
//       </Slider>
//     );
//   }
// }

import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

export default class SimpleSlider extends Component {
  // mixins: [Carousel.ControllerMixin]
  render() {
    return (
      <Carousel>
        {this.props.children}
      </Carousel>
    );
  }
}
