import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Sub from "./modules/Sub";

class Context extends Component{
    static childContextTypes = {
        name : PropTypes.string,
        saySomething : PropTypes.func
    };

    getChildContext() {
        return {
            name : 'callie',
            saySomething : ()=>{
                console.log('I am callie');
            }
        }
    }

    render(){
        return <Sub/>
    }
}

export default Context;