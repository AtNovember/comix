import {Component, PropTypes} from 'react'
import importcss from 'importcss'

import {Col} from 'react-bootstrap'

@importcss(require('./Scene.css'))
export default class Scene extends Component {
  static propTypes = {};

  render() {
    // width -ширина готово!
    // wrap
    // movie__card
    // background
    // heros
    // bubbles
    let wrap = this.props.wrap
      ? 'wrap'
      : ''
    let movie__card = this.props.movie__card
      ? 'movie__card'
      : ''
    let bg = this.props.background || this.props.bg || ''
    let scene = <div styleName={'Scene ' + wrap + ' ' + movie__card}
      styles={backgroundImage = url(bg)}>
      {this.props.children}
    </div>

    let wd = this.props.width || this.props.wd || this.props.wide || 12
    // console.log(wd);
    return <Col sm={wd} lg={wd}>
      {scene}
    </Col>

  }
}
