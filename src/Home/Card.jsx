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
    // const {overlay} = this.state
    const overlay = true
    return (
      <div
        className='col-sm-12 col-md-6 col-lg-4 col-xl-3'
        onMouseEnter={this.handleOverlayIn} onMouseLeave={this.handleOverlayOut}
      >
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={imgUrl}

            title='wow'
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
      <Typography type='headline' component='h2' align='center'>
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
    height: '100%'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(222, 222, 222, .3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  flexRow: {
    width: '80%',
  }
}

export default withStyles(styles)(LinkCard)
