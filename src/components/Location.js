import React from 'react';

 
class Location extends React.Component {
    render() {
        return (
            <div>
                { this.props.lat && this.props.long && 
                <h1>Location:  {this.props.city}, {this.props.state}</h1>}
                { this.props.error && <h1 className="location"> {this.props.error} </h1>}
            </div> 
            
        )
    }
}

export default Location;