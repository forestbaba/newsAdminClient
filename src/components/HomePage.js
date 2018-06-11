import React, {Component} from 'react';
import TheNavbar from "./navbar";
import ContentCounter from './ContentCounter';
import LSB from './Left-Side-bar';
import  QuickLinks from './Quick-Links';
import LastFiveNews from './Last-five-news';
import logo from '../images/avatar.png';

var FontAwesome = require('react-fontawesome');


export default class HomePage extends Component {
    render() {

        return (
            <div className="Home">


                {/*<ContentCounter/>*/}

                <div className="row">
                    <div className="col-xs-3 col-md-3">

                        <LSB/>
                        {/*<div className="row clearfix">*/}

                            {/*<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">*/}
                                {/*<div className="info-box bg-pink hover-expand-effect">*/}
                                    {/*<div className="icon">*/}
                                        {/*<i>folder</i>*/}
                                    {/*</div>*/}
                                    {/*<div className="content">*/}
                                        {/*<div className="text">CATEGORIES</div>*/}
                                        {/*<div className="number count-to" data-from="0" data-to="52" data-speed="1000"*/}
                                             {/*data-fresh-interval="20"></div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                            {/*</div>*/}
                            {/*<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">*/}
                                {/*<div className="info-box bg-cyan hover-expand-effect">*/}
                                    {/*<div className="icon">*/}
                                        {/*<i className="material-icons">local_library</i>*/}
                                    {/*</div>*/}
                                    {/*<div className="content">*/}
                                        {/*<div className="text">NEWS</div>*/}
                                        {/*<div className="number count-to" data-from="0" data-to="144" data-speed="1000"*/}
                                             {/*data-fresh-interval="20"></div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">*/}
                                {/*<div className="info-box bg-light-green hover-expand-effect">*/}
                                    {/*<div className="icon">*/}
                                        {/*<i className="material-icons">supervisor_account</i>*/}
                                    {/*</div>*/}
                                    {/*<div className="content">*/}
                                        {/*<div className="text">USERS</div>*/}
                                        {/*<div className="number count-to" data-from="0" data-to="6" data-speed="1000"*/}
                                             {/*data-fresh-interval="20"></div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">*/}
                                {/*<div className="info-box bg-orange hover-expand-effect">*/}
                                    {/*<div className="icon">*/}
                                        {/*<i className="material-icons">android</i>*/}
                                    {/*</div>*/}
                                    {/*<div className="content">*/}
                                        {/*<div className="text">DEVICES</div>*/}
                                        {/*<div className="number count-to" data-from="0" data-to="628" data-speed="1000"*/}
                                             {/*data-fresh-interval="20"></div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        {/*<div className="card">*/}
                            {/*<img src={logo} alt="Avatar" width="100" padding-top="100"/>*/}
                            {/*<div className="container" margin-bottom="160">*/}
                                {/*<h4><b>John Doe</b></h4>*/}
                                {/*<p>Architect & Engineer</p>*/}
                            {/*</div>*/}

                        {/*</div>*/}
                        {/*<ul>*/}
                            {/*<li>atching route. I'm not</li>*/}
                            {/*<li>atching route. I'm not</li>*/}
                            {/*<li>atching route. I'm not</li>*/}
                            {/*<li>atching route. I'm not</li>*/}
                            {/*<li>*/}
                                {/*<div className="card">*/}
                                    {/*<FontAwesome*/}
                                        {/*className='super-crazy-colors'*/}
                                        {/*name='rocket'*/}
                                        {/*size='5x'*/}
                                        {/*spin*/}
                                        {/*style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}*/}
                                    {/*/>*/}
                                    {/*<img src={logo} width="50px" height="50px"/>*/}
                                    {/*<div className="container">*/}
                                        {/*<h4><b>John Doe</b></h4>*/}
                                        {/*<p>Architect & Engineer</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</li>*/}
                        {/*</ul>*/}

                        {/*<div className="btn-group" role="group" aria-label="...">*/}
                            {/*<button type="button" className="btn btn-default">Left</button>*/}
                            {/*<button type="button" className="btn btn-default">Right</button>*/}
                        {/*</div>*/}

                        {/*<div className="progress">*/}
                            {/*<div className="progress-bar progress-bar-success" width="35%">*/}
                                {/*<span className="sr-only">35% Complete (success)</span>*/}
                            {/*</div>*/}
                            {/*<div className="progress-bar progress-bar-warning progress-bar-striped" width="20%">*/}
                                {/*<span className="sr-only">20% Complete (warning)</span>*/}
                            {/*</div>*/}
                            {/*<div className="progress-bar progress-bar-danger" width="10%">*/}
                                {/*<span className="sr-only">10% Complete (danger)</span>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        {/*<div className="list-group">*/}
                            {/*<a href="#" className="list-group-item active">*/}
                                {/*Cras justo odio*/}
                            {/*</a>*/}
                            {/*<a href="#" className="list-group-item">Dapibus ac facilisis in</a>*/}
                            {/*<a href="#" className="list-group-item">Morbi leo risus</a>*/}
                            {/*<a href="#" className="list-group-item">Porta ac consectetur ac</a>*/}
                            {/*<a href="#" className="list-group-item">Vestibulum at eros</a>*/}
                        {/*</div>*/}

                        {/*<div className="alert alert-danger" role="alert">*/}
                            {/*<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>*/}
                            {/*<span className="sr-only">Error:</span>*/}
                            {/*Enter a valid email address*/}
                        {/*</div>*/}
                        {/*<div>*/}

                            {/*<FontAwesome*/}
                                {/*className='super-crazy-colors'*/}
                                {/*name='rocket'*/}
                                {/*size='5x'*/}
                                {/*spin*/}
                                {/*style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}*/}
                            {/*/>*/}
                        {/*</div>*/}

                    </div>
                    <div className="col-xs-9 col-md-9">
                        <ContentCounter/>
                        <QuickLinks/>
                        <LastFiveNews/>

                    </div>

                </div>




            </div>

        );
    }
}
