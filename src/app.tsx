import 'styles/main.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import classNames from 'classnames';

// Init Store
import store from './store';

// Pages
import Home from './pages/Home';

interface IAppState {
    collapsed : boolean
}

class App extends Component<any, IAppState>{
    constructor(){
        super();

        this.state = {
            collapsed : true
        }
    }

    collapseHandler(){
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    linkHandler(eve : Event){
        if(eve.srcElement && eve.srcElement.tagName === 'A'){
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
                    <div className={sidebarClass} onClick={this.linkHandler.bind(this)}>
                        <div className="nav" onClick={this.collapseHandler.bind(this)}>
                            <span className={iconBack} />
                        </div>
                        <div className="item"><Link to="/">Home</Link></div>
                    </div>
                    <div className="main">
                        <Route exact path="/" component={Home} />
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
