/**
 * @fileOverView: React.Children usage
 * @author: xuejian.xu
 * @date: 2017/6/9.
 */

import React from 'react';

import ParentClass from './modules/ParentClass';

const Children = () => {
    return (
        <div>
            <h2>
                React.Children : React.Children provides utilities for dealing
                with the this.props.children opaque data structure.
            </h2>

            <ParentClass />
        </div>
    );
};

export default Children;
