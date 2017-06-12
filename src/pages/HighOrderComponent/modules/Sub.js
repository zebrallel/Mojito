import React, {Component} from 'react';

class Sub extends Component{
    componentDidMount(){
        console.log('Sub Class did mount!');
    }

    componentWillUnmount(){
        console.log('Sub class will unmount!');
    }

    showAge(){
        console.log('sub age is:', this.props.age);
    }

    render(){
        const {sex = 'uknown', age, name, onChange} = this.props;

        return (
            <div>
                <div>
                    <input type="text" value={name} onChange={onChange}/>
                </div>
                <div>Name in Sub : {name}</div>
                <div>Age : {age}</div>
                <div>Sex : {sex}</div>
            </div>
        )
    }
}

export default Sub;