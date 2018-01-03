/**
 * @fileOverView: Home page
 * @author: xuejian.xu
 * @date: 2017/6/9.
 */

import React from 'react'
import './style.scss'

class Home extends React.Component {
    state = {
        info: {
            age: 18
        }
    }
    clickHandler = () => {
        this.state.info.age = 20
        this.setState({
            info: this.state.info
        })
    }
    render() {
        return (
            <div id="Home">
                <div>Home Page</div>
                <Person info={this.state.info} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

class Person extends React.PureComponent{
    render(){
        return (
            <div>age: {this.props.info.age}</div>
        )
    }
}

export default Home
