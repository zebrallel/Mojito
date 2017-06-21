import React, {Component} from 'react';
import PropTypes from 'prop-types'

import GrandSub from './GrandSub';

class Sub extends Component{
    static contextTypes = {
        name : PropTypes.string,
        saySomething : PropTypes.func
    };

    constructor(props, context){
        super(props);

        console.dir(context);
    }

    render(){
        return <div>Sub and <GrandSub /></div>
    }
}

export default Sub;