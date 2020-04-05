import React, { Component } from 'react'
import axios from 'axios'

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
            weatherData: []

        }
    }
//2,3,4,5,6
    componentDidMount(){
        axios.get(`'api.openweathermap.org'${process.env.REACT_API_APP_KEY}`)
        .then(response =>{
            console.log(response)
            //we are calling on the posts state to update with api data
            this.setState({weatherData: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    
    render() {
    //7 
        const {weatherData} =this.state

        return (
            <div>
                <h1>Check the Weather</h1>
                {
                    weatherData.length ?
                    weatherData.map(weather => <div key={weather.id} >{weather.title}</div>):
                    null
                }
                
            </div>
        )
    }
}
