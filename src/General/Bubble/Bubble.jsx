import { Component } from 'react'
import importcss from 'importcss'

@importcss(require('./Bubble.css'))
export default class Bubble extends Component {
  render() {
    return <div>
      {this.props.children}
    </div>
  }
}
