/**
 * @fileOverView: entry file
 * @author: xuejian.xu
 * @date: 2017/6/9.
 */

import styles from 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';

// Init Store
import store from './store';

// Pages
import Home from 'pages/Home';
import Children from 'pages/Children';
import HighOrderComponent from 'pages/HighOrderComponent';
import ASync from 'pages/ASync';
import Diff from 'pages/Diff';
import Axios from 'pages/Axios';
import TodoList from 'pages/TodoList';
import Context from 'pages/Context';

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
                    <div className={styles.item}><Link to="/axios">Axios</Link></div>
                    <div className={styles.item}><Link to="/todolist">TodoList</Link></div>
                    <div className={styles.item}><Link to="/context">Context</Link></div>
                </div>
                <div className={styles.main}>
                    <Route exact path="/" component={Home} />
                    <Route path="/children" component={Children} />
                    <Route path="/highOrderComponent" component={HighOrderComponent} />
                    <Route path="/async" component={ASync} />
                    <Route path="/diff" component={Diff} />
                    <Route path="/axios" component={Axios} />
                    <Route path="/todolist" component={TodoList} />
                    <Route path="/context" component={Context} />
                </div>
            </div>
        </Router>
    );
};

function render(content){
    ReactDOM.render(content, document.getElementById('root'));
}

render(
    <Provider store={store}>
        <App />
    </Provider>
);