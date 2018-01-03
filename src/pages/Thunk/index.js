import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from './actions'

class Thunk extends Component {
    constructor() {
        super()

        this.state = {
            calculating: false
        }
    }

    componentWillReceiveProps() {
        this.setState({
            calculating: false
        })
    }

    dispatchAction = () => {
        const { num, square } = this.props

        square(num)

        this.setState({
            calculating: true
        })
    }

    render() {
        const { num } = this.props
        const { calculating } = this.state

        const button = calculating ? <div>Please wait for a second...</div> : <button onClick={this.dispatchAction}>Click me to dispatch a async action</button>

        return (
            <div className="m-page">
                <header>Thunk Demo</header>
                <br />
                <div>Num : {num}</div>
                <br />
                {button}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { thunk } = state

    return { num: thunk.num }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Thunk)
