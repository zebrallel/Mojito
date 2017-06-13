/**
 * @fileOverView: entry file
 * @author: xuejian.xu
 * @date: 2017/6/9.
 */

import styles from 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import Children from 'pages/Children';
import HighOrderComponent from 'pages/HighOrderComponent';
import ASync from 'pages/ASync';
import Diff from 'pages/Diff';

const App = () => {
    return (
        <Router>
            <div>
                <div className={styles.sidebar}>
                    <div className={styles.item}><Link to="/">Home</Link></div>
                    <div className={styles.item}><Link to="/children">React.Children</Link></div>
                    <div className={styles.item}><Link to="/highOrderComponent">High Order Component</Link></div>
                    <div className={styles.item}><Link to="/async">ASync</Link></div>
                    <div className={styles.item}><Link to="/diff">Diff</Link></div>
                </div>
                <div className={styles.main}>
                    <Route exact path="/" component={Home} />
                    <Route path="/children" component={Children} />
                    <Route path="/highOrderComponent" component={HighOrderComponent} />
                    <Route path="/async" component={ASync} />
                    <Route path="/diff" component={Diff} />
                </div>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));