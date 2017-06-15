import React, { Component } from 'react';

import Sub from './modules/Sub';
import Super from './modules/Super';

class Diff extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1
        };
    }

    render() {
        const { counter } = this.state;

        return (
            <div>
                <h2>When react diff happens?</h2>
                <div>
                    counter : {counter}
                    <button
                        onClick={() => {
                            this.setState({ counter: counter + 1 });
                        }}
                    >
                        +
                    </button>
                </div>
                {counter % 2 === 0
                    ? <Sub counter={counter} id={1} />
                    : <Super counter={counter} id={2} />}
            </div>
        );
    }
}

export default Diff;
