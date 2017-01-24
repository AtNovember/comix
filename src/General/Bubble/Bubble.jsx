import { Component } from 'react'
import importcss from 'importcss'

@importcss(require('./Bubble.css'))
export default class Bubble extends Component {
  render() {
    console.log(this.props.bottom);
    const props = this.props;

    // speaker - location of speaker
    // default is bottom
    let speaker;
    if (!props.speaker) {
      speaker = props.top ? 'top' :
                props.right ? 'right' :
                props.left ? 'left' :
                props.bottom ? 'bottom' :
                props.topLeft ? 'topLeft' :
                props.topRight ? 'topRight' :
                props.rightTop ? 'rightTop' :
                props.rightBottom ? 'rightBottom' :
                props.bottomRight ? 'bottomRight' :
                props.bottomLeft ? 'bottomLeft' :
                props.leftBottom ? 'leftBottom' :
                props.rightBottom ? 'rightBottom' : 'bottom';
      // speaker = props.speaker;
    } else {
      speaker = props.speaker
    }

    let { xtop, yright, xbottom, yleft } = this.props
    return <div
      styleName={"Bubble " + speaker}
      style={{ xtop, yright, xbottom, yleft }}
    >
      {this.props.children}
    </div>
  }
}
