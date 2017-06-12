/**
 * @fileOverView: High order component
 * @author: xuejian.xu
 * @date: 2017/6/9.
 */

import React from 'react';

import Wrapper from './modules/Wrapper';
import Sub from './modules/Sub';

const HighOrderComponent = ()=>{
    const WrapperClass = Wrapper(Sub);

    return (
        <div>
            <h2>High order component</h2>
            <p>有两种主流的在 React 中实现高阶组件的方法：属性代理（Props Proxy）和 反向继承（Inheritance Inversion）</p>
            <br/>
            <p>Props Proxy 可以做什么？</p>
            <ul>
                <li>添加修改props</li>
                <li>通过 refs 获取组件实例</li>
                <li>抽象 state</li>
                <li>结构控制</li>
            </ul>
            <br/>
            <p>Example:</p>
            <WrapperClass age={21} />
        </div>
    )
} ;

export default HighOrderComponent;
