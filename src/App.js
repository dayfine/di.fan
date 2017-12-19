import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Landing from './Landing'
import About from './About'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <main className='container main'>
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
