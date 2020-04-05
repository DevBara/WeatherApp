import React, { Component } from 'react'
import Days from './components/Days'



export default class App extends Component {
  constructor(props){
    super(props);

    this.state= {};
    this.getWeather ();

  }

  getWeather= async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=75287&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)

    const response = await api_call.json();

    console.log(response);
  }

  

  render() {
    return (
      <div>

        <Days />
        
      </div>
    )
  }
}
