import React, { Component } from 'react';
import ModuleB from './modules/moduleB';

class Ensure extends Component {
    constructor(){
        super();

        this.state = {
            comps : [ModuleB]
        }
    }

    load = () => {
        require.ensure([], (require)=>{
            this.state.comps.push(require('./modules/moduleA').default);
            this.setState({});
        });
    }

    render() {
        const {comps} = this.state;

        return (
            <div className="m-page">
                <div>Ensure Demo</div>
                <button onClick={this.load}>Click me to load modules</button>
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
