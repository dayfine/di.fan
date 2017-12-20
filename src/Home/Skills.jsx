import React from 'react'
import { withStyles } from 'material-ui/styles'
import CenterPaper from '../common/CenterPaper'
import Chip from 'material-ui/Chip'
import Typography from 'material-ui/Typography'

const skills = [
  'React', 'JavaScript', 'ES6/Babel', 'Redux',
  'Node.js', 'Express', 'SQL', 'PostgreSQL',
  'HTML5/CSS3', 'Sass', 'Material Design', 'Bootstrap',
  'Git/GitHub', 'TDD', 'Heroku', 'AWS',
  'Python', 'PHP'
]

function Skills ({ classes }) {
  return (
    <CenterPaper>
      <div className='row start-xs'>
        {skills.map(skill => (
          <Chip
            label={skill}
            key={skill}
            className='col-xs-4 col-sm-3 col-md-2 col-xl-1'
            classes={{
              root: classes.chip
            }}
          />
        ))}
      </div>
    </CenterPaper>
  )
}

const styles = {
  chip: {
    margin: '8px 12px',
    // background: '#e9e9e9',
    borderRadius: '8px',
    backgroundImage: `-webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 6%, hsla(0,0%,100%, .1) 7.5%),
    -webkit-repeating-linear-gradient(left, hsla(0,0%, 0%,0) 0%, hsla(0,0%,  0%,0) 4%, hsla(0,0%,  0%,.03) 4.5%),
    -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.15) 2.2%),
    linear-gradient(180deg, hsl(0,0%,78%)  0%,
    hsl(0,0%,90%) 47%,
    hsl(0,0%,78%) 53%,
    hsl(0,0%,70%)100%)`
  }
}

export default withStyles(styles)(Skills)
