import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

function Signature ({ classes }) {
  return (
    <Link to='/home' className={classes.root}>
      <div className={classes.name}>
        Di Fan
      </div>
      <div className={classes.tagline}>
        Full Stack Developer
      </div>
    </Link>
  )
}

const styles = {
  root: {
    fontFamily: "'Spectral SC', serif",
    textDecoration: 'none',
    maxWidth: 500,
    margin: '0 auto',
    color: '#111',
    textAlign: 'center',
    '&:hover': {
      color: '#ccc'
    }
  },
  name: {
    fontSize: '7.5em'
  },
  tagline: {
    marginTop: 12,
    fontSize: '2.75em'
  }
}

export default withStyles(styles)(Signature)
