import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/home'
import './App.css'

function App (): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={HomePage} exact />
        </Switch>
      </Router>
    </div>
  )
}

export default App
