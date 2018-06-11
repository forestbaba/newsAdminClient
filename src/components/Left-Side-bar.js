import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export default class LeftSideBar extends Component {
    render() {

        return (
            <div className="lsb">
                    <div className="container">
                        <ul className="list-group">

                            <li className="list-group-item disabled">Category</li>
                            <li className="list-group-item">Home</li>
                            <li className="list-group-item">Category Manager</li>
                            <li className="list-group-item">News Manager</li>
                            <li className="list-group-item">User Manager</li>
                            <li className="list-group-item">Notification Manager</li>
                            <li className="list-group-item">Devices and Saved News</li>
                            <li className="list-group-item">Saved News Stat </li>
                            <li className="list-group-item">Settings</li>
                        </ul>
                </div>
            </div>

        );
    }
}
