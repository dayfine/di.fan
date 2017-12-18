import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Landing from './Landing'
import Contact from './Contact'
import Projects from './Projects'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <main className='container main'>
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/home' exact component={Home} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/contact' exact component={Contact} />

          </Switch>
        </main>
      </div>
    )
  }
}

export default App
