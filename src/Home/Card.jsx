import React, { Component } from 'react'

import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

class LinkCard extends Component {
  state = {
    overlay: false
  }

  handleOverlayIn = () => {
    this.setState({ overlay: true })
  }

  handleOverlayOut = () => {
    this.setState({ overlay: false })
  }

  render () {
    const { classes, imgUrl, type, ...rest } = this.props
    const { overlay } = this.state

    return (
      <div
        className='col-sm-12 col-md-6 col-lg-4 col-xl-3'
        onMouseEnter={this.handleOverlayIn} onMouseLeave={this.handleOverlayOut}
      >
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={imgUrl}
          />
          {overlay && (
            <Overlay classes={classes} {...rest} />
          )}
        </Card>
      </div>
    )
  }
}

const LinkButton = ({ href, text }) => (
  <Button dense raised color='accent' component='a' href={href} target='_blank'>
    {text}
  </Button>
)

const Overlay = ({ classes, name, repoLink, siteLink }) => (
  <div className={classes.overlay}>
    <div className={`row around-xs ${classes.flexRow}`}>
      <Typography color='inherit' type='display1' className={classes.title}>
        {name}
      </Typography>
    </div>
    <div className={`row around-xs ${classes.flexRow}`}>
      <LinkButton href={siteLink} text='Demo Site' />
      <LinkButton href={repoLink} text='GitHub' />
    </div>
  </div>
)

const styles = {
  card: {
    width: '100%',
    position: 'relative',
    paddingBottom: '100%'
  },
  media: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    color: '#fff',
    backgroundColor: 'rgba(72, 72, 72, .7)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontFamily: "'Spectral SC', serif",
    textAlign: 'center'
  },
  flexRow: {
    width: '80%',
  }
}

export default withStyles(styles)(LinkCard)
