import 'styles/main.scss'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import classNames from 'classnames'

// Init Store
import store from './store'

// Pages
import Home from './pages/Home/index'
import ListViewDemo from './pages/ListViewDemo/index'
import Counter from './pages/Counter/index'
import Debounce from './pages/Debounce/index'
import Ensure from './pages/Ensure/index'
import HighOrderComponent from './pages/HighOrderComponent/index'
import Thunk from './pages/Thunk/index'
import Draggable from './pages/Draggable/index'
import SubRouter from './pages/SubRouter'
import Mobx from './pages/Mobx'
import CSS from './pages/CSS/css'
import StyledComponent from './pages/StyledComponent/styledComponent'
import ZScroller from './pages/ZScroller/ZScroll'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="main">
                    <Route exact path="/" component={Home} />
                    <Route path="/listViewDemo" component={ListViewDemo} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/debounce" component={Debounce} />
                    <Route path="/ensure" component={Ensure} />
                    <Route path="/highOrderComponent" component={HighOrderComponent} />
                    <Route path="/thunk" component={Thunk} />
                    <Route path="/draggable" component={Draggable} />
                    <Route path="/subrouter" component={SubRouter} />
                    <Route path="/mobx" component={Mobx} />
                    <Route path="/css" component={CSS} />
                    <Route path="/styled" component={StyledComponent} />
                    <Route path="/zscroller" component={ZScroller} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)