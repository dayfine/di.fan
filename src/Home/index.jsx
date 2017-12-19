import React from 'react'
import Card from './Card'
import Profile from './Profile'

import links from '../links'

function Home (props) {
  return (
    <div>
      <div className='row'>
        <Profile />
      </div>
      <div className='row no-gutters start-xs'>
        {links.map(link => (
          <Card {...link} key={link.name} />
      ))}
      </div>
    </div>
  )
}

export default Home
