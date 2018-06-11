import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export default class LastFiveNews extends Component {
    render() {

        return (
            <div className="lastfivenews">
                    <div className="jumbotron">

                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h5 className="panel-title">Last Five News</h5>
                            </div>

                        </div>

                        <div className="panel panel-default">
                            <table className="table">
                                <thead>
                                <tr className="table_row">
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Publisher</th>
                                    <th scope="col">Actions</th>


                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Thornton</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>Thornton</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>Thornton</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>Thornton</td>
                                    <td>Thornton</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        {/*<button className="btn btn-primary" type="button">*/}
                            {/*Messages <span className="badge">4</span>*/}
                        {/*</button>*/}
                        {/*<button className="btn btn-primary" type="button">*/}
                            {/*Messages <span className="badge">4</span>*/}
                        {/*</button>*/}
                        {/*<button className="btn btn-primary" type="button">*/}
                            {/*Messages <span className="badge">4</span>*/}
                        {/*</button>*/}
                        {/*<button className="btn btn-primary" type="button">*/}
                            {/*Messages <span className="badge">4</span>*/}
                        {/*</button>*/}
                        {/*<button className="btn btn-primary" type="button">*/}
                            {/*Messages <span className="badge">4</span>*/}
                        {/*</button>*/}
                </div>
            </div>

        );
    }
}
