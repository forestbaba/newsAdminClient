import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export default class Navigationbar extends Component {
    render() {

        return (
            <div className="TheNavbar">
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                        <Link to="/" className="navbar-brand">Company Name</Link>

                        <div className="collapse navbar-collapse navbar-right" id="navbarNavDropdown" >
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <Link to="/home" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item"> <Link to="/feature" className="nav-link">Category Manager</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">News Manager</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">User Manager</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Notification Manager</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Devices and Saved News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Saved News Stat</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Settings</a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </Router>
            </div>

        );
    }
}
