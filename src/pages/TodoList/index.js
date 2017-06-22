import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoItem, minusTodoItem } from './actions';
import { bindActionCreators } from 'redux';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    addItemHandler() {
        const { value } = this.state;
        const { addTodoItem } = this.props;

        if (!value) {
            return;
        }

        addTodoItem(value);

        this.setState({
            value: ''
        });
    }

    minusItemHandler(index) {
        const { minusTodoItem } = this.props;

        minusTodoItem(index);
    }

    render() {
        const { todos } = this.props.todo;
        const { value } = this.state;

        return (
            <div>
                <h2>TodoList</h2>
                <br />
                <input
                    type="text"
                    value={value}
                    onChange={eve => {
                        this.setState({ value: eve.target.value });
                    }}
                />
                <button onClick={::this.addItemHandler}>add one</button>
                <hr />
                <h2>items:</h2>
                <ul>
                    {todos.map((item, index) => {
                        return (
                            <li key={`${item}_${index}`}>
                                <span>{item}</span>
                                <button
                                    onClick={() => {
                                        this.minusItemHandler(index);
                                    }}
                                >
                                    -
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const todo = state.todo;

    return { todo };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addTodoItem: bindActionCreators(addTodoItem, dispatch),
        minusTodoItem: bindActionCreators(minusTodoItem, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);