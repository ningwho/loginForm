import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  state = {
      username: '',
      password: ''   
    };

    myInput = React.createRef();
    static propTypes = {
        history: PropTypes.object
    };

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        const { username, password } = this.state;
        
    
        if (username === 'foo' && password === 'bar') {
            return this.props.history.push("/loggedin"); 
        }
        if (username === 'foo1' && password === 'bar')
            return this.props.history.push("/notfound");
        else {
            return this.props.history.push("/");
        }
                        
    };    

    render() {
        const { username, password } = this.state;
        return (
        <div className="home">
            <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={this.handleChange}
            />
            <button type="submit">Login</button>
        </form>
        </div>
        );
    }
}

export default LoginForm;