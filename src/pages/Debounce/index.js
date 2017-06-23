import styles from './style.scss';
import React, { Component } from 'react';
import propTypes from 'prop-types';

import _debounce from 'lodash/debounce';
import _throttle from 'lodash/throttle';
const boxes = [];

for (let i = 0; i < 100; i++) {
    boxes.push(i);
}

class Debounce extends Component {
    ids = {};
    doms = {};

    constructor(props) {
        super(props);

        this.state = {
            type: 'none'
        };
    }

    onMouseMoveHandler(handler) {
        const { type } = this.state;

        switch (type) {
            case 'none':
                return handler;
            case 'debounce':
                return _debounce(handler, 300, {
                    leading: true,
                    trailing: false
                });
            case 'throttle':
                return _throttle(handler, 300, { trailing: false });
        }
    }

    render() {
        return (
            <div>
                <div className={styles.title}>
                    这是一个没有使用debounce/throttle的例子：
                </div>
                <Line
                    key={Math.random()}
                    onStart={box => {
                        let index = 0;
                        let cells = box.children;

                        this.ids['demo1'] = setInterval(() => {
                            if (index < cells.length) {
                                if (
                                    index !== 0 &&
                                    cells[index].previousSibling.style
                                        .background === 'rgb(170, 170, 170)'
                                ) {
                                    cells[
                                        index
                                    ].previousSibling.style.background =
                                        '#fff';
                                }

                                cells[index].style.background = '#aaa';
                                this.doms['demo1'] = cells[index];

                                index++;
                            } else {
                                clearInterval(this.ids['demo1']);
                            }
                        }, 100);
                    }}
                    onReset={() => {
                        clearInterval(this.ids['demo1']);
                        this.setState({});
                    }}
                    onMouseMove={this.onMouseMoveHandler(() => {
                        if (this.doms['demo1']) {
                            this.doms['demo1'].style.background = '#f30';
                        }
                    })}
                />
                <br />
                <input
                    id="none"
                    type="radio"
                    name="type"
                    defaultChecked
                    onClick={() => {
                        this.setState({ type: 'none' });
                    }}
                />
                <label htmlFor="none">none</label>
                <input
                    id="debounce"
                    type="radio"
                    name="type"
                    onClick={() => {
                        this.setState({ type: 'debounce' });
                    }}
                />
                <label htmlFor="debounce">debounce</label>
                <input
                    id="throttle"
                    type="radio"
                    name="type"
                    onClick={() => {
                        this.setState({ type: 'throttle' });
                    }}
                />
                <label htmlFor="throttle">throttle</label>
            </div>
        );
    }
}

class Line extends Component {
    box;

    static propTypes = {
        onStart: propTypes.func
    };

    render() {
        const { onStart, onReset, onMouseMove } = this.props;

        return (
            <div>
                <div onMouseMove={onMouseMove} className={styles.area}>
                    Move area
                </div>
                <div
                    className={styles.box}
                    ref={dom => {
                        this.box = dom;
                    }}
                >
                    {boxes.map(item => {
                        return (
                            <div
                                key={item}
                                data-flag={item}
                                className={styles.cell}
                            />
                        );
                    })}
                </div>
                <button
                    onClick={() => {
                        onStart(this.box);
                    }}
                >
                    Start
                </button>
                <button onClick={onReset}>Reset</button>
            </div>
        );
    }
}

export default Debounce;
