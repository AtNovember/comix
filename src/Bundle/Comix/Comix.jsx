import React, { Component } from 'react'
import importcss from 'importcss'
import { Grid } from 'react-bootstrap'

@importcss(require('./Comix.css'))
export default class Comix extends Component {
  render() {
    return <div styleName='Comix'>
      <Grid>
        {this.props.children}
      </Grid>
    </div>
  }
}
