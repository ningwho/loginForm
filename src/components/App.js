import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import NotFound from './NotFound';
import LoggedIn from './LoggedIn';
import '../css/style.css';


class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div className="app">          
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route path="/loggedin" component={LoggedIn} />
            <Route path="/notfound" component={NotFound} />
           
            
            
         </Switch>
        </div>                
        </BrowserRouter>
    )
  }

}
export default App;
