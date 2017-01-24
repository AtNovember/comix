// import { Component, PropTypes } from 'react';
import { Component } from 'react';
import importcss from 'importcss';
import { Col } from 'react-bootstrap';

@importcss(require('./Scene.css'))
export default class Scene extends Component {
  // static propTypes = {};

  render() {
    // width -ширина готово!
    // wrap
    // movie__card
    // background
    // heros
    // bubbles
    const wrap = this.props.wrap ? 'wrap' : ''
    const movie__card = this.props.movie__card ? 'movie__card' : ''
    const bg = this.props.background || this.props.bg || '';

    console.log('bg', bg);
    const scene = <div
      styleName={'Scene ' + wrap + ' ' + movie__card}
      style={{backgroundImage: 'url('+bg+')' }}
    >
      {this.props.children}
    </div>

    let wd = this.props.width || this.props.wd || this.props.wide || 12
    // console.log(wd);
    return <Col xs={wd} sm={wd} md={wd} lg={wd}>
      {scene}
    </Col>
  }
}
