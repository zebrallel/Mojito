import React, { Children } from 'react';

function getContent(props) {
    switch (props.code) {
        case 1:
            return (
                <div>
                    <p>this is sub class </p>
                    {Children.map(props.children, child => {
                        return childWrapper(child);
                    })}
                </div>
            );
        case 2:
            return (
                <div>
                    Count : {Children.count(props.children)}
                </div>
            );
        case 3:
            console.dir(Children.toArray(props.children));

            return <div>toArray</div>;
    }
}

function childWrapper(child) {
    return <div>{child} wrapped!</div>;
}

const SubClass = props => {
    return getContent(props);
};

export default SubClass;
