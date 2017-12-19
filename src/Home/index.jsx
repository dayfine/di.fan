import React from 'react'
import Card from './Card'
import Profile from './Profile'

function Home (props) {
  return (
    <div>
      <div className='row'>
        <Profile />
      </div>
      <div className='row'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home
