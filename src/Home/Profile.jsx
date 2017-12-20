import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import CenterPaper from '../common/CenterPaper'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

class Profile extends Component {
  render () {
    const { classes } = this.props
    return (
      <CenterPaper>
        <Typography type='headline' className={classes.title}>
          Di Fan
        </Typography>
        <Typography type='body1'>
          Web Developer in New York City
        </Typography>
      </CenterPaper>

    )
  }
}

const styles = {
  title: {
    fontFamily: "'Spectral SC', serif",
    fontSize: '4em',
    textDecoration: 'none',
    maxWidth: 500,
    margin: '0 auto',
    color: '#fff',
    textAlign: 'center',
    '&:hover': {
      color: '#ccc'
    }
  }
}

export default withStyles(styles)(Profile)
