import { Component } from 'react'
import ReactDOM from 'react-dom'
import { Col, Overlay, Tooltip, Image } from 'react-bootstrap'
import importcss from 'importcss'

@importcss(require('./Hero.css'))
export default class Hero extends Component {
  constructor(props) {
    super(props);
    // console.log('props', props);
    this.state = {
      show: false,
      // coordTop : this.coordTop || null,
      // coordRight : this.coordRight || null,
      // coordBottom : this.coordBottom || null,
      // coordLeft : this.coordLeft || null,
    };
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {

    const sharedProps = {
      show: this.state.show,
      container: this,
      target: () => ReactDOM.findDOMNode(this.refs.target)
    };

    const coordTop = this.props.coordTop;
    const coordRight = this.props.coordRight;
    const coordBottom = this.props.coordBottom;
    const coordLeft = this.props.coordLeft;
    console.log('COORDS', this.props.coordRight, this.props.coordTop);
    const wd = this.props.width || this.props.wd || this.props.wide || 6

    return <Col xs={wd} sm={wd} md={wd} lg={wd}
      style={{
        position: 'absolute',
        top: coordTop,
        right: coordRight,
        bottom: coordBottom,
        left: coordLeft,
      }}
    >
      <Image responsive
        src={this.props.img}
        ref="target"
        onMouseOver={this.toggle.bind(this)}
        onMouseOut={this.toggle.bind(this)}
      />

      <Overlay {...sharedProps} ref={(target) => { this.show = target; }} placement="top">
        <Tooltip>{this.props.name}</Tooltip>
      </Overlay>
    </Col>
  }
}
