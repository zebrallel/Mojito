/**
 * @fileOverView: entry file
 * @author: xuejian.xu
 * @date: 2017/6/9.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import PageA from 'pages/PageA';
import PageB from 'pages/PageB';

const App = ()=>{
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pageA">PageA</Link></li>
                    <li><Link to="/pageB">PageB</Link></li>
                </ul>

                <Route exact path="/" component={Home}/>
                <Route path="/pageA" component={PageA}/>
                <Route path="/pageB" component={PageB}/>
            </div>
        </Router>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));