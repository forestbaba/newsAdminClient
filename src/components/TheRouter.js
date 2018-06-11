import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import Homepage from './HomePage';
import Feature from './Feature';
import Navigationbar from './navbar';


const TheRouter = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Navigationbar}/>
            <Route path='/home' component={Homepage}/>
            <Route path='/feature' component={Feature}/>

        </Switch>
    </main>
);

export default TheRouter;
