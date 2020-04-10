import React, { Component } from 'react'
import axios from 'axios'


//mintemp
//city: null
//description: null
//maxtemp: null

//The way we use axios.get is uniform. This is the foundation

//1. create constructor props to being process of setting state
//2. create get request using Axios https://www.youtube.com/watch?v=NEYrSUM4Umw&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=42
//3. get request should be in componentDidMount
//4. Axios get accepts the API end point as its parameter
//5. Add promises then & catch
//6. Once we get the response, state needs to be updated
//7. create variable for state - its structure- in render
//8. Display data list using map 

export default class Days extends Component {
   //1 
    constructor(props){
    super(props)

        this.state = {
            city:[],
            temperature: [],
            wind: [],
            humidity: [],
            date: []
        
        }
    }
//2,3,4,5,6
    componentDidMount(){
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=75287,us&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
            //we are calling on the weatherData state to update with api data
            this.setState({
                temperature: response.data.list[0].main.temp,
                wind: response.data.list[3].wind.speed,
                city: response.data.city.name,
                humidity: response.data.list[0].main.humidity,
                data: response.data.dt_txt
              
            })
            //using console log- returning undefined
           console.log(response.list.dt_txt)
            
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
    //7 
        const {temperature} = this.state
        const {wind} =this.state
        const {city}= this.state
        const {humidity}=this.state
        const {date} =this.state

        return (
            <div className="parent">   
                <div className="cards">
                    <h1>Here is the Forecast for Day Two</h1>
                    <h3>Location: {city}</h3>
                    <p>Today's Date: {date}</p>
                    <p>Current Temp: {temperature}</p>
                    <p>Wind Speed: {wind} mph</p>
                    <p>Humidity: {humidity}%</p>
                </div>         
            </div>
        )
    }
}

