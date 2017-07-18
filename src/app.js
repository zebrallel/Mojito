/**
 * @fileOverView: entry file
 * @author: xuejian.xu
 * @date: 2017/6/9.
 */

import 'styles/main.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import classNames from 'classnames';

// Init Store
import store from './store';

// Pages
import Home from 'pages/Home';
import Children from 'pages/Children';
import HighOrderComponent from 'pages/HighOrderComponent';
import Counter from 'pages/Counter';
import Diff from 'pages/Diff';
import Axios from 'pages/Axios';
import TodoList from 'pages/TodoList';
import Context from 'pages/Context';
import Flex from 'pages/Flex';
import Debounce from 'pages/Debounce';
import Ensure from 'pages/Ensure';
import Thunk from 'pages/Thunk';
import ListViewDemo from 'pages/ListViewDemo';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            collapsed : true
        }
    }

    collapseHandler(){
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    linkHandler(eve){
        if(eve.target.tagName === 'A'){
            debugger

            this.setState({
                collapsed : true
            });
        }
    }

    render(){
        const {collapsed} = this.state;
        const sidebarClass = classNames({
            'sidebar' : true,
            'sidebarHide' : collapsed
        });
        const iconBack = classNames({
            'icon' : true,
            'i-back' : true,
            'tag' : true,
            'reverse' : collapsed
        });

        return (
            <Router>
                <div>
                    <div className={sidebarClass} onClick={::this.linkHandler}>
                        <div className="nav" onClick={::this.collapseHandler}>
                            <span className={iconBack} />
                        </div>
                        <div className="item"><Link to="/">Home</Link></div>
                        <div className="item"><Link to="/children">React.Children</Link></div>
                        <div className="item"><Link to="/highOrderComponent">High Order Component</Link></div>
                        <div className="item"><Link to="/counter">Counter</Link></div>
                        <div className="item"><Link to="/diff">Diff</Link></div>
                        <div className="item"><Link to="/axios">Axios</Link></div>
                        <div className="item"><Link to="/todolist">TodoList</Link></div>
                        <div className="item"><Link to="/context">Context</Link></div>
                        <div className="item"><Link to="/flex">Flex</Link></div>
                        <div className="item"><Link to="/debounce">Debounce</Link></div>
                        <div className="item"><Link to="/ensure">Ensure</Link></div>
                        <div className="item"><Link to="/thunk">Thunk</Link></div>
                        <div className="item"><Link to="/listViewDemo">ListViewDemo</Link></div>
                    </div>
                    <div className="main">
                        <Route exact path="/" component={Home} />
                        <Route path="/children" component={Children} />
                        <Route path="/highOrderComponent" component={HighOrderComponent} />
                        <Route path="/counter" component={Counter} />
                        <Route path="/diff" component={Diff} />
                        <Route path="/axios" component={Axios} />
                        <Route path="/todolist" component={TodoList} />
                        <Route path="/context" component={Context} />
                        <Route path="/flex" component={Flex} />
                        <Route path="/debounce" component={Debounce} />
                        <Route path="/ensure" component={Ensure} />
                        <Route path="/thunk" component={Thunk} />
                        <Route path="/listViewDemo" component={ListViewDemo} />
                    </div>
                </div>
            </Router>
        );
    }
}

function render(content){
    ReactDOM.render(content, document.getElementById('root'));
}

render(
    <Provider store={store}>
        <App />
    </Provider>
);