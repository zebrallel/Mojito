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

    componentDidMount(){
        // async & await语法
        var sleep = function (time) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, time);
            })
        };

        var start = async function (time) {
            // 在这里使用起来就像同步代码那样直观
            console.log('start');

            await sleep(time);

            return {result : 'done'}
        };

        var test = async function(){
            for(let i=0; i<5; i++){
                var res = await start(2000);

                console.log(res.result);
            }
        };

        test();
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
