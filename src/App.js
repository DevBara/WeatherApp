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
                <Link to ="/CurrentDay"> Today's Forecast</Link>
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
            <Route path ="/currentday" component ={CurrentDay} />
            <Route path ="/daytwo" component={DayTwo}/>
            <Route path ="/daythree" component={DayThree}/>
            <Route path ="/dayfour" component ={DayFour}/>
            <Route path ="/dayfive" component={DayFive}/>
          </Switch>
        </div>
      <div className='App'>
      </div>
    </Router>
    )
  }
}
