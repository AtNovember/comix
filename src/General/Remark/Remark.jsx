import {Component} from 'react'
import {Col} from 'react-bootstrap'
import importcss from 'importcss'


@importcss(require('./Remark.css'))
export default class Remark extends Component {
  render() {
    // const props = this.props;

    // let {x,y} = this.props

    const coordTop = this.props.coordTop;
    const coordRight = this.props.coordRight;
    const coordBottom = this.props.coordBottom;
    const coordLeft = this.props.coordLeft;
    console.log(coordBottom, coordRight);
    const wd = this.props.width || this.props.wd || this.props.wide || 3
    return <Col xs={wd} sm={wd} md={wd} lg={wd}>
        <div
          styleName={'Remark'}
          style={{ top: coordTop, right: coordRight, bottom: coordBottom, left: coordLeft }}
        >
        {this.props.children}
      </div>
    </Col>
  }
}
