import React, {Component} from 'react';

class Super extends Component{
    shouldComponentUpdate(){
        return false;
    }

    componentWillReceiveProps(props){
        console.log(`Super ${this.props.id} received props!`);
    }

    componentDidMount(){
        console.log(`Super ${this.props.id} did mount!`);
    }

    componentWillUnmount(){
        console.log(`Super ${this.props.id} will unmount!`);
    }

    render(){
        console.log(`Super ${this.props.id} do render!`);

        return <div>Super {this.props.id}</div>
    }
}

export default Super;
