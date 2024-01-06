// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CharityDetail from './components/CharityDetail';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/charity/:id" component={CharityDetail} />
            </Switch>
        </Router>
    );
}

export default App;