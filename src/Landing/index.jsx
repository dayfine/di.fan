import React from 'react'
import { withStyles } from 'material-ui/styles'

import Background from './Background'
import Signature from './Signature'

function Landing ({ classes }) {
  return (
    <div className='row'>
      <Background />
      <div className={classes.center}>
        <Signature />
      </div>
    </div>
  )
}

const styles = {
  center: {
    position: 'absolute',
    top: '35%',
    width: '100%',
    zIndex: 222,
    textAlign: 'center',
    color: '#111'
  }
}

export default withStyles(styles)(Landing)
