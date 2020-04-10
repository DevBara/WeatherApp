import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import CurrentDay from './components/CurrentDay'
import DayTwo from './components/DayTwo'
import DayThree from './components/DayThree'
import DayFour from './components/DayFour'
import DayFive from './components/DayFive'



export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to ="/"> Today's Forecast</Link>
              </li>
              <li>
                <Link to ="/daytwo"> Day Two Forecast</Link>
              </li>
              <li>
                <Link to ="/daythree"> Day Three Forecast</Link>
              </li>
              <li>
                <Link to ="/dayfour"> Day Four Forecast</Link>
              </li>
              <li>
                <Link to ="/dayfive"> Day Five Forecase</Link>
              </li>
            </ul>
          </nav>
          
          <Switch>
            <Route path ="/today">
              <CurrentDay />
            </Route>
            <Route path ="/daytwo">
              <DayTwo />
            </Route>
            <Route path ="/daythree">
              <DayThree />
            </Route>
            <Route path ="/dayfour">
              <DayFour />
            </Route>
            <Route path ="/dayfive">
              <DayFive />
            </Route>
          </Switch>
        </div>
      <div className='App'>
        
      </div>
    </Router>
    )
  }
}
