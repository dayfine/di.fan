import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import ProperButton from './ProperButton'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const Header = ({ classes }) => {
  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.flexRow}>
        <div className={classes.flexRow}>
          <ProperButton
            component={Link}
            to='/home'
          >
            Home
          </ProperButton>
          <ProperButton
            component={Link}
            to='/projects'
          >
            Projects
          </ProperButton>

          <ProperButton
            component={Link}
            to='/contact'
          >
            Contact
          </ProperButton>
        </div>
        <Typography
          type='headline'
          className={classes.title}
          component={Link}
          to='/'
        >
          Di Fan
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const styles = theme => ({
  root: {
    width: '100%',
    background: 'rgba(222, 222, 222, 0)',
    border: '1px solid rgba(222, 222, 222, 0)',
    boxShadow: 'none'
  },
  flexRow: {
    minHeight: '48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: "'Spectral SC', serif",
    fontSize: '2.25em',
    textDecoration: 'none',
    marginRight: '16px',
    flex: '5 0 25%',
    color: '#fff',
    textAlign: 'right',
    '&:hover': {
      color: '#eee'
    }
  }
})

export default withStyles(styles)(Header)
