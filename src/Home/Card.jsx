import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

class LinkCard extends Component {
  state = {
    overlay: false
  }

  handleOverlayIn = (evt) => {
    this.setState({ overlay: true })
  }

  handleOverlayOut = (evt) => {
    this.setState({ overlay: false })
  }

  render () {
    const { classes } = this.props
    return (
      <div
        className='col-sm-12 col-md-6 col-lg-4 col-xl-3'
        onMouseEnter={this.handleOverlayIn} onMouseLeave={this.handleOverlayOut}
      >
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image='//d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg'
            title='wow'
          />

        {this.state.overlay && (
          <Overlay
            overlayClass={classes.overlay}
            name='cat'
            repoLink='/'
            siteLink='/'
          />
        )}
        </Card>
      </div>
    )
  }
}

const Overlay = ({ overlayClass, name, repoLink, siteLink }) => (
  <div className={overlayClass}>
    <CardContent>
      <Typography type='headline' component='h2'>
        {name}
      </Typography>
    </CardContent>
    <CardActions>
      <Button dense color='primary'>
        Share
      </Button>
      <Button dense color='primary'>
        Learn More
      </Button>
    </CardActions>
  </div>
)

const styles = {
  card: {
    width: '100%',
    position: 'relative'
  },
  media: {
    width: '100%',
    minHeight: 250,
    height: '100%'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(72, 72, 72, .4)'
  }
}

export default withStyles(styles)(LinkCard)
