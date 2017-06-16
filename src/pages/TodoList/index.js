import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodoItem} from './actions';

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            value : ''
        }
    }

    addItemHandler(){
        const {value} = this.state;
        const {dispatch} = this.props;

        dispatch(addTodoItem(value));
    }

    render(){
        const {todos} = this.props.todo;
        const {value} = this.state;

        return (
            <div>
                <h2>TodoList</h2>
                <br/>
                <input type="text" value={value} onChange={(eve)=>{this.setState({value : eve.target.value})}} />
                <button onClick={::this.addItemHandler}>add one</button>
                <hr/>
                <h2>items:</h2>
                <ul>
                    {
                        todos.map((item)=>{
                            return <li key={item}>{item}</li>;
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    const todo = state.todo;

    return {todo}
};

export default connect(mapStateToProps)(TodoList);