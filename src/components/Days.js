import React, { Component } from 'react'



export default class Days extends Component {
    state={
        dailyData:[]
    }

    componentDidMount = () => {
        const url = `"api.openweathermap.org"=${process.env.REACT_APP_API_KEY}`;

        fetch(url)
            .then(res => res.json)())
            .then (data => console.log("Data loaded",data.list))

    }
    render() {

        return (
            <div>
                <h1>Check the Weather</h1>
                
            </div>
        )
    }
}
