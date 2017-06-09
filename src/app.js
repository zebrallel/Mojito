/**
 * @fileOverView: entry file
 * @author: xuejian.xu
 * @date: 2017/6/9.
 */

import styles from 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import PageA from 'pages/PageA';
import PageB from 'pages/PageB';

const App = () => {
    return (
        <Router>
            <div>
                <div className={styles.sidebar}>
                    <div className={styles.item}>
                        <Link to="/">Home</Link>
                    </div>
                    <div className={styles.item}>
                        <Link to="/pageA">PageA</Link>
                    </div>
                    <div className={styles.item}>
                        <Link to="/pageB">PageB</Link>
                    </div>
                </div>
                <div className={styles.main}>
                    <Route exact path="/" component={Home} />
                    <Route path="/pageA" component={PageA} />
                    <Route path="/pageB" component={PageB} />
                </div>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
