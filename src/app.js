/**
 * @fileOverView: entry file
 * @author: xuejian.xu
 * @date: 2017/6/9.
 */

import React from 'react';
import ReactDOM from 'react-dom';

function render(content){
    ReactDOM.render(content, document.getElementById('root'));
}

render(<div>Hello World 3!</div>);