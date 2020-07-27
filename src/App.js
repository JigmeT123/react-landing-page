import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './Components/navbar';
import About from './Components/about';
import Contact from './Components/contact';
import Home from './Components/home';
import Post from './Components/post'
class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="app">
                    
                    <NavBar />
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/about" component={About} />
                    <Route  path="/contact" component={Contact} />
                    <Route path='/:post_id' component={Post}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;