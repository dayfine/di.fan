import React from 'react'
import { TransitionMotion, spring } from 'react-motion'
import { withStyles } from 'material-ui/styles'

const leavingSpringConfig = {stiffness: 100, damping: 35};

class Background extends React.Component {
  state = {
    mouse: [],
    now: 't' + 0
  }

  handleMouseMove = ({pageX, pageY}) => {
    // Make sure the state is queued and not batched.
    this.setState(() => {
      return {
        mouse: [pageX - 37.5, pageY - 37.5],
        now: 't' + Date.now(),
      }
    })
  }

  handleTouchMove = (e) => {
    e.preventDefault()
    this.handleMouseMove(e.touches[0])
  }

  willLeave = (styleCell) => {
    return {
      ...styleCell.style,
      opacity: spring(0, leavingSpringConfig),
      scale: spring(2, leavingSpringConfig),
    }
  }

  render() {
    const { mouse: [mouseX, mouseY], now } = this.state
    const { classes } = this.props

    const styles = mouseX == null ? [] : [{
      key: now,
      style: {
        opacity: spring(1),
        scale: spring(0),
        x: spring(mouseX),
        y: spring(mouseY),
      }
    }]

    return (
      <TransitionMotion willLeave={this.willLeave} styles={styles}>
        {circles =>
          <div
            onMouseMove={this.handleMouseMove}
            onTouchMove={this.handleTouchMove}
            className={classes.root}>
            {circles.map(({key, style: {opacity, scale, x, y}}) =>
              <div
                key={key}
                className={classes.ripple}
                style={{
                  opacity: opacity,
                  scale: scale,
                  transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                  WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                }} />
            )}
          </div>
        }
      </TransitionMotion>
    )
  }
}

const styles = {
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 111,
    background: '#eee'
  },
  ripple: {
    width: 75,
    height: 75,
    borderRadius: 99,
    position: 'absolute',
    border: '1px solid #111',
  }
}

export default withStyles(styles)(Background)
