import React from 'react';
import CityForm from './CityForm';
import Location from './Location';

class LoggedIn extends React.Component {
    state = {
        lat: '',
        long: '',
        city: '',
        state: '',
        error: ''
    }

    getCity = async (event) => {
        event.preventDefault();
        const lat = event.target.elements.lat.value;
        const long = event.target.elements.long.value;
        const api_call = await fetch(`https://api.weather.gov/points/${lat},${long}`)
        const data = await api_call.json();
        console.log(data);
        if (data.title === 'Not Found') {
            this.setState ({
                error: 'Not found'
            })
        } else if (lat && long) {
            this.setState({
           
            lat: data.properties.relativeLocation.geometry.coordinates[0],
            long: data.properties.relativeLocation.geometry.coordinates[1],
            city: data.properties.relativeLocation.properties.city,
            state: data.properties.relativeLocation.properties.state,
            error: null
           
            })
        }
    }

    render() {
        return(
        <div>
            <h1>Success !</h1>
            <CityForm getCity={this.getCity} />   
            <Location 
                city = {this.state.city}
                state = {this.state.state}
                lat = {this.state.lat}
                long = {this.state.long}  
                error = {this.state.error}     
            />  
        </div>

        );
    }        
};

export default LoggedIn;