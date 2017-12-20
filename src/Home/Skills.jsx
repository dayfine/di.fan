import React from 'react'
import { withStyles } from 'material-ui/styles'
import CenterPaper from '../common/CenterPaper'
import Chip from 'material-ui/Chip'
import Typography from 'material-ui/Typography'

const skills = [
  'React', 'JavaScript', 'ES6/Babel', 'Node.js',
  'SQL', 'PostgreSQL'
]

function Skills ({ classes }) {
  return (
    <CenterPaper>
      <div className='row center'>
        {skills.map(skill => (
          <Chip
            label={skill}
            key={skill}
            className='col-xs-4 col-sm-3 col-md-2'
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
    background: '#e9e9e9',
    borderRadius: '8px'
  }
}

export default withStyles(styles)(Skills)
