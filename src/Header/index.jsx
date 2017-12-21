import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import ProperButton from '../common/ProperButton'
import Avatar from 'material-ui/Avatar'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

const Icon = ({ href, site, iconClass }) => (
  <a href={href} target='_blank'>
    <i className={`fa fa-${site} ${iconClass}`} aria-hidden='true' />
  </a>
)

const Header = ({ classes, location }) => {
  const landing = location.pathname === '/'

  return (
    <AppBar
      className={landing ? classes.landing : classes.root}
      position='static'
    >
      <Toolbar className={classes.flexRow}>
        <div className={classes.flexRow}>
          {!landing &&
            <Avatar
              component={NavLink}
              to='/'
              className={classes.avatar}
            >
              DF
            </Avatar>
          }
          <ProperButton
            component={NavLink}
            activeClassName={classes.active}
            to='/home'
          >
            Home
          </ProperButton>
          <ProperButton
            component={NavLink}
            activeClassName={classes.active}
            to='/about'
          >
            About
          </ProperButton>
        </div>
        <div className={classes.flexRow}>
          <Icon href='mailto:difancpa@gmail.com' site='envelope' iconClass={classes.icon} />
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
    background: 'rgba(222, 222, 222, 0.1)',
    border: '1px solid rgba(222, 222, 222, 0)',
    boxShadow: 'none',
    color: '#fff'
  },
  avatar: {
    textDecoration: 'none',
    marginRight: 15,
    background: 'rgba(222, 222, 222, 0.25)'
  },
  active: {
    background: '#333',
    color: '#ccc'
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
