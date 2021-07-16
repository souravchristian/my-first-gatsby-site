import React, { Component } from 'react';
// import Home from '../src/pages/about';
// // import CarouselClass from './component/carousel';
// // import ConditionalRender from './component/ConditionalRender';
// import Login from '../component/Login';
// import Registration from '../component/Registration';
// import SelectDataExampleApi from '../component/SelectDataExampleApi';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
class App extends Component {
    render() {
    console.log('fdddddddddddddg');

        return (
            <Router>
                <Switch>
                    <Route path="/users">
                        <Home />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Registration />
                    </Route>
                    <Route path="/apiexample">
                        <SelectDataExampleApi />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router >
        );
    }
}

export default App;
