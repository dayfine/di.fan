import React from 'react'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

const CenterPaper = props => {
  const {classes, ...rest} = props
  return (
    <Paper className={classes.center} {...rest}>
      {props.children}
    </Paper>
  )
}

const styles = {
  center: {
    flex: '1 0 auto',
    textTransform: 'none',
    width: '100%',
    padding: '36px 24px',
    margin: '0 auto',
    fontSize: '1em',
    backgroundColor: '#222'
  }
}

export default withStyles(styles)(CenterPaper)
