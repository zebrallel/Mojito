import React from 'react';

import SubClass from './SubClass';

const ParentClass = () => {
    return (
        <div>
            <h3>1. React.Children.map</h3>
            <div>Example:</div>

            <SubClass code={1}>
                <span>sub-1</span>
                <span>sub-2</span>
                <span>sub-3</span>
            </SubClass>

            <h3>2. React.Children.forEach</h3>
            <p>Like React.Children.map() but does not return an array.</p>

            <h3>3. React.Children.count</h3>
            <p>Returns the only child in children. Throws otherwise.</p>
            <h3>Example:</h3>

            <div>The number of sub children is: </div>
            <SubClass code={2}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
            </SubClass>

            <h3>4. React.Children.toArray</h3>
            <p>
                Returns the children opaque data structure as a flat array with
                keys assigned to each child. Useful if you want to manipulate
                collections of children in your render methods, especially if
                you want to reorder or slice this.props.children before passing
                it down.
            </p>
            <h3>Example:</h3>

            <SubClass code={3}>
                <span>4</span>
                <span>5</span>
                <span>6</span>
            </SubClass>
        </div>
    );
};

export default ParentClass;
