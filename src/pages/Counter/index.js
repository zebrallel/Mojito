/**
 * @fileOverView: Counter operation
 * @author: xuejian.xu
 * @date: 2017/6/12.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import actions from './actions'

class Counter extends Component {
    addInput
    minusInput

    addNumHandler = () => {
        const { value } = this.addInput
        const { increase } = this.props

        increase(parseInt(value))
    }

    minusNumHandler = () => {
        const { value } = this.minusInput
        const { decrease } = this.props

        decrease(parseInt(value))
    }

    render() {
        const { count } = this.props

        return (
            <div className="m-page">
                Count : {count}
                <div>
                    <input
                        type="number"
                        ref={dom => {
                            this.addInput = dom
                        }}
                    />
                    <button onClick={this.addNumHandler}>add</button>
                </div>
                <div>
                    <input
                        type="number"
                        ref={dom => {
                            this.minusInput = dom
                        }}
                    />
                    <button onClick={this.minusNumHandler}>minus</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { count: state.counter.count }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
