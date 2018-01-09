/**
 * @fileOverView: Home page
 * @author: xuejian.xu
 * @date: 2017/6/9.
 */

import React from 'react'
import './style.scss'
import { Portal, PortalWithState } from 'react-portal'

class Home extends React.Component {
    state = {
        showProtal: false,
        info: {
            age: 18
        }
    }
    clickHandler = () => {
        this.state.info.age = 20
        this.setState({
            showProtal: true,
            info: this.state.info
        })
    }
    render() {
        return (
            <div id="Home">
                <div>Home Page</div>
                <Person info={this.state.info} />
                <button onClick={this.clickHandler}>Click</button>
                <PortalWithState closeOnOutsideClick closeOnEsc>
                    {({ openPortal, closePortal, isOpen, portal }) => [
                        <button key="foo" onClick={openPortal}>
                            Open Portal
                        </button>,
                        portal(
                            <div className="portal">
                                This is more advanced Portal. It handles its own state. <button onClick={closePortal}>Close me!</button>, hit ESC or click outside of me.
                            </div>
                        )
                    ]}
                </PortalWithState>
            </div>
        )
    }
}

class Person extends React.PureComponent {
    render() {
        return <div>age: {this.props.info.age}</div>
    }
}

export default Home
