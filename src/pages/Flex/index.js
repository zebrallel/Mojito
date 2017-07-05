import './style.scss';

import React, {Component} from 'react';

class Flex extends Component{
    render(){
        return (
            <div id="Flex" className="m-page">
                <div>flex-grow: 这是属性设置的其实是剩余空间分配的比例值，而不是当前元素自身所占的比例</div>
                <br/>
                <div className="box">
                    <div className="left">
                        <span className="contentLeft">cLeft</span>
                    </div>
                    <div className="right">
                        <span className="contentRight">cRight</span>
                    </div>
                </div>
                <br/>
                <div>flex-basis: 这个属性的意思是，我们应该以这个值作为元素的初始宽度，计算出剩余空间的大小</div>
                <br/>
                <div className="box">
                    <div className="left2">260px</div>
                    <div className="right2">340px</div>
                </div>
                <br/>
                <div>让我们来做一个简单的两栏布局：</div>
                <br/>
                <div className="demo3">
                    <div className="demo3Left">400px</div>
                    <div className="demo3Right">fill the remain</div>
                </div>
            </div>
        )
    }
}

export default Flex;