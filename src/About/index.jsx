import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

function About ({ classes }) {
  return (
    <div className={`row ${classes.wrapper}`}>
      <div className='col-xs-12 col-sm-5'>
        <img src='/assets/me.png' alt='Di Fan' />
      </div>
      <div className='col-xs-12 col-sm-6'>
        <Typography type='display1' color='inherit' className={classes.header}>
          Dreamer
        </Typography>
        <Typography type='body1' color='inherit'>
          CPA turned progmmer, Di wrote his first computer program in 2017 to automate half of his accounting work. Intrigued, Di went on to explore more about programming by attending <a href='//www.fullstackacademy.com' target='_blank'>Fullstack Academy of Code in New York City</a>, where he deep-dived into Web Development with React and Node.js.
          <br />
          <br />
          In between coding, Di loves spending time with friends, reading about all sorts of topics, learning human and programming languages, watching manga or Netflix series, or even traveling to the other side of the planet.
        </Typography>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    maxWidth: 990,
    margin: '0 auto',
    padding: 24,
    paddingTop: 100
  },
  header: {
    marginBottom: 18,
    fontFamily: "'Spectral SC', serif"
  }
}

export default withStyles(styles)(About)
