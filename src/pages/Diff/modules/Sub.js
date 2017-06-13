import React, {Component} from 'react';

class Sub extends Component{
    shouldComponentUpdate(){
        return false;
    }

    componentWillReceiveProps(props){
        console.log(`Sub ${this.props.id} received props!`);
    }

    componentDidMount(){
        console.log(`Sub ${this.props.id} did mount!`);
    }

    componentWillUnmount(){
        console.log(`Sub ${this.props.id} will unmount!`);
    }

    render(){
        console.log(`Sub ${this.props.id} do render!`);

        return <div>Sub {this.props.id}</div>
    }
}

export default Sub;