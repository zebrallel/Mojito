import React, {Component} from 'react';
import PropTypes from 'prop-types'

class GrandSub extends Component{
    static contextTypes = {
        name : PropTypes.string,
        saySomething : PropTypes.func
    };

    constructor(props, context){
        super(props);

        console.log('grandSub');
        console.dir(context);
    }

    render(){
        return <div>I'm GrandSub</div>
    }
}

export default GrandSub;