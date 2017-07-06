import './style.scss';
import React, { Component } from 'react';
import ScrollView from '../ScrollView/index';

class ListView extends Component {
    onScroll(iscroll){
        console.log(iscroll.y);
    }

    render() {
        const { height } = this.props;

        return (
            <div className="c-listview">
                <ScrollView
                    height={height}
                    events={{
                        scroll : (iscroll)=>{this.onScroll(iscroll)}
                    }}
                >
                    <p className="head-tip">下拉刷新</p>
                    {this.props.children}
                    <p>没有更多了</p>
                </ScrollView>
            </div>
        );
    }
}

export default ListView;
