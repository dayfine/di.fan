import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import ProperButton from '../common/ProperButton'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

const Icon = ({ href, site, iconClass }) => (
  <a href={href} target='_blank'>
    <i className={`fa fa-${site} ${iconClass}`} aria-hidden='true' />
  </a>
)

const Header = ({ classes, location }) => {
  const { pathname } = location
  const landing = location.pathname === '/'

  return (
    <AppBar
      className={landing ? classes.landing : classes.root}
      position='static'
    >
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
            to='/about'
          >
            About
          </ProperButton>
        </div>
        <div className={classes.flexRow}>
          <Icon href='//github.com/dayfine' site='github' iconClass={classes.icon} />
          <Icon href='//linkedin.com/in/daveyfan' site='linkedin' iconClass={classes.icon} />
          <Icon href='//instagram.com/dayfine/' site='instagram' iconClass={classes.icon} />
        </div>
      </Toolbar>
    </AppBar>
  )
}

const styles = theme => ({
  landing: {
    background: '#eee',
    color: '#111'
  },
  root: {
    background: 'rgba(222, 222, 222, 0)',
    border: '1px solid rgba(222, 222, 222, 0)',
    boxShadow: 'none',
    color: '#fff'
  },
  flexRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 48
  },
  icon: {
    fontSize: '1.25em',
    marginRight: 20,
    textDecoration: 'none'
  }
})

export default withRouter(withStyles(styles)(Header))
