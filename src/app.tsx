import 'styles/main.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import classNames from 'classnames';

// Init Store
import store from './store';

// Pages
import Home from './pages/Home/index';
import ListViewDemo from './pages/ListViewDemo/index';
import Counter from './pages/Counter/index';
import Debounce from './pages/Debounce/index';
import Ensure from './pages/Ensure/index';
import HighOrderComponent from './pages/HighOrderComponent/index';
import Thunk from './pages/Thunk/index';
import Flex from './pages/Flex/index';

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

        this.collapseHandler();
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
                        <div className="item"><Link to="/listViewDemo">ListViewDemo</Link></div>
                        <div className="item"><Link to="/counter">Counter</Link></div>
                        <div className="item"><Link to="/debounce">Debounce</Link></div>
                        <div className="item"><Link to="/ensure">Ensure</Link></div>
                        <div className="item"><Link to="/flex">Flex</Link></div>
                        <div className="item"><Link to="/highOrderComponent">HighOrderComponent</Link></div>
                        <div className="item"><Link to="/thunk">Thunk</Link></div>

                    </div>
                    <div className="main">
                        <Route exact path="/" component={Home} />
                        <Route path="/listViewDemo" component={ListViewDemo} />
                        <Route path="/counter" component={Counter} />
                        <Route path="/debounce" component={Debounce} />
                        <Route path="/ensure" component={Ensure} />
                        <Route path="/flex" component={Flex} />
                        <Route path="/highOrderComponent" component={HighOrderComponent} />
                        <Route path="/thunk" component={Thunk} />
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
