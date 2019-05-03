import React from 'react';

class CityForm extends React.Component {
    render() {
        return(
        <div className="city">
            <h1>Enter longitude and latitude</h1>
        <form onSubmit={this.props.getCity}>
            <label>Latitude</label>
            <input
            name="lat"
            type="text"
            placeholder="latitude..."
            />
            <label>Longitude</label>
            <input
            name="long"
            type="text"
            placeholder="longitude..."
            />
            <button className="city">Submit</button>
        </form>
        </div>
        );
    }
};


export default CityForm;