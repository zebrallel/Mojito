import React, { Component } from 'react';

const Wrapper = Child => {
    return class WrapperClass extends Component {
        constructor(props) {
            super(props);

            this.state = {
                name: 'xxj'
            };
            this.onNameChange = this.onNameChange.bind(this);
        }

        onNameChange(eve) {
            this.setState({
                name: eve.target.value
            });
        }

        /**
         * 使用ref获取subClass实例
         * @param subInstance
         */
        doSubMethod(subInstance) {
            // Note : React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.
            subInstance && subInstance.showAge();
        }

        render() {
            const { name } = this.state;

            // 这里是修改props
            const newProps = {
                name: name,
                sex: 'female'
            };

            return (
                <div>
                    <div>Name in Wrapper : {name}</div>
                    <Child
                        {...Object.assign(newProps, this.props)}
                        ref={this.doSubMethod.bind(this)}
                        onChange={this.onNameChange}
                    />
                </div>
            );
        }
    };
};

export default Wrapper;
