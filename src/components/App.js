import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route } from 'react-router-dom';
import Feature from '../components/Feature';
import HomePage from '../components/HomePage';
import CategoryManager from '../components/CategoryManager'

import Navigationbar from './navbar'

ReactDOM.render(
    <div>
        <Navigationbar />
    </div>, document.getElementById('nav-container'));


ReactDOM.render(
    <div>
        {/*<HomePage />*/}
        <Router>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route path="/feature" component={Feature} />
                <Route path="/categorymanager" component={CategoryManager} />
            </div>
        </Router>
    </div>, document.getElementById('container'));




