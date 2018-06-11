import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import logo from '../images/news_icon.png';
import folder2 from '../images/folder2.png';
import users from '../images/users.png';
import android from '../images/android.png';


export default class ContentCounter extends Component {
    render() {

        return (
            <div className="contentcounter">
                <div className="jumbotron">
                    <div className="container">

                        <div className="row" id="contentId">
                            <div className="col-xs-6 col-md-3">
                                <div className="btn-group " role="group" aria-label="...">

                                    <button type="button" className="btn btn-default conten1"><img src={folder2} alt="folder" height="40" width="40"/></button>
                                    <button type="button" className="btn btn-default"><div className="cat">CATEGORIES</div> <div className="countcat">52</div></button>

                                </div>

                            </div>

                            <div className="col-xs-6 col-md-3">
                                <div className="btn-group" role="group" aria-label="...">
                                    <button type="button" className="btn btn-default"><img src={logo} alt="folder" height="40" width="40"/></button>
                                    <button type="button" className="btn btn-default"><div className="news">NEWS</div> <div className="countnews">144</div></button>

                                    <button type="button" className="btn btn-default">Right</button>
                                </div>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <div className="btn-group" role="group" aria-label="...">
                                    <button type="button" className="btn btn-default"><img src={users} alt="folder" height="40" width="40"/></button>
                                    <button type="button" className="btn btn-default"><div className="user">USERS</div> <div className="countuser">6</div></button>
                                </div>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <div className="btn-group" role="group" aria-label="...">
                                    <button type="button" className="btn btn-default"><img src={android} alt="folder" height="40" width="40"/></button>
                                    <button type="button" className="btn btn-default"><div className="user">DEVICES</div> <div className="countuser">628</div></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
