import React, { Component } from 'react';
import ModuleB from './modules/moduleB';

class Ensure extends Component {
    constructor(){
        super();

        this.state = {
            comps : [ModuleB]
        }
    }

    load(){
        require.ensure([], (require)=>{
            const module = require('./modules/moduleA');

            this.state.comps.push(module.default);
            this.setState({});
        });
    }

    render() {
        const {comps} = this.state;

        return (
            <div>
                <div>Ensure Demo</div>
                <button onClick={::this.load}>Click me to load modules</button>
                <div>Component : </div>
                {
                    comps.map((module, idx)=>{
                        return React.createElement(module, {key : idx})
                    })
                }
            </div>
        );
    }
}

export default Ensure;
