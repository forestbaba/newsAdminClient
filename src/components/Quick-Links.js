import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import android from '../images/android.png';
import addnew from '../images/addnew.png'
import addNewFolder from '../images/addnewFolder.png';
import addNewUser from '../images/addnewUser.png';
import notification from '../images/notification.png';
import settings from '../images/settings.png';

export default class QuickLinks extends Component {
    render() {

        return (
            <div className="quicklink">
                    <div className="jumbotron reduce">

                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h5 className="panel-title">Quick Links</h5>
                            </div>
                            <div><hr role="separator" className="divider"></hr></div>

                        </div>

                        <button className="btn btn-success" type="button" width="50"><img src={addnew} alt="folder" height="20" width="20"/>
                            Add News</button>
                        <button className="btn btn-primary" type="button"><img src={addNewFolder} alt="folder" height="20" width="20"/>
                            ADD CATEGORY </button>
                        <button className="btn btn-info" type="button"><img src={addNewUser} alt="folder" height="20" width="20"/>
                            ADD USER </button>
                        <button className="btn btn-warning" type="button"><img src={notification} alt="folder" height="20" width="20"/>
                            NOTIFICATION </button>
                        <button className="btn btn-danger" type="button"><img src={settings} alt="folder" height="20" width="20"/>
                            SETTINGS </button>
                </div>
            </div>

        );
    }
}
