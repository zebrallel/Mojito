import './style.scss';
import * as React from 'react';
import { observable, action, autorun } from 'mobx';
import { observer } from 'mobx-react';

let AppState = observable({
    time: 0
})

AppState.reset = action(() => {
    AppState.time = 0;
});

setInterval(action(() => {
    AppState.time += 1;
}), 1000);

autorun(() => {
    console.log('time: ' + AppState.time);
})

var todoStore = observable({
    /* some observable state */
    todos: [],

    /* a derived value */
    get completedCount() {
        return this.todos.filter(todo => todo.completed).length;
    }
});

/* a function that observes the state */
autorun(function() {
    console.log("Completed %d of %d items",
        todoStore.completedCount,
        todoStore.todos.length
    );
});

@observer
class Mobx extends React.Component{
    onReset = () => {
        AppState.reset();
    }
    render(){
        return (
            <div id="Mobx">
                Second: {AppState.time}
                <button onClick={this.onReset}>reset</button>
                <div>
                    <button onClick={() => {
                        todoStore.todos[0] = {
                            title: "Take a walk",
                            completed: false
                        };
                    }}>todo button</button>
                </div>
                <div>
                    <button onClick={() => {
                        todoStore.todos[0].completed = true;
                    }}>add item</button>
                </div>
            </div>
        )
    }
}

export default Mobx;