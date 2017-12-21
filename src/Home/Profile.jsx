import React from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

function Profile ({ classes }) {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.root}>
        <div className='row around-xs'>
          <Typography
            type='headline'
            className={classes.title}
            color='inherit'
          >
            Di Fan
          </Typography>
        </div>
        <div className='row around-xs'>
          <Typography
            type='subheading'
            color='inherit'
          >
          I am a Web De&#9825;eloper in New York City
          </Typography>
          <Typography
            type='body1'
            color='inherit'
            align='justify'
          >
            <br />
            I mainly use React/Redux, Node.js, and CSS-in-JS solutoins, but am open to other stacks. I am learning new languages/technologies to be able to solve even more impactful problems. I really look forward the opportunities to work with smart people on irreplaceable products!
          </Typography>
        </div>
      </Paper>
    </div>
  )
}

const styles = {
  wrapper: {
    width: '100%',
    backgroundColor: 'rgba(222, 222, 222, 0.1)'
  },
  root: {
    flex: '1 0 auto',
    maxWidth: 600,
    padding: 40,
    margin: '0 auto',
    backgroundColor: 'rgba(222, 222, 222, 0)',
    color: '#e5e5e5'
  },
  title: {
    fontFamily: "'Spectral SC', serif",
    fontSize: '4em',
    textDecoration: 'none',
    maxWidth: 500,
    '&:hover': {
      color: '#ccc'
    }
  }
}

export default withStyles(styles)(Profile)
