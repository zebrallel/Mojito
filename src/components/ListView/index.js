import './style.scss';
import React, { Component } from 'react';
import ScrollView from '../ScrollView/index';

const PULLING_DOWN = '下拉刷新';
const RELEASE = '松手立即刷新';
const REFRESH_SUCCESS = '刷新成功';


class ListView extends Component {
    onScroll(iscroll){
        console.log(iscroll.y);

        if(iscroll.y > 38){
            console.log('ssssssss');
            iscroll.options.disableTouch = true;
        }
    }

    onScrollEnd(iscroll){
        console.dir(iscroll);
    }

    render() {
        const { height } = this.props;

        return (
            <div className="c-listview">
                <ScrollView
                    height={height}
                    events={{
                        scroll : (iscroll)=>{this.onScroll(iscroll)},
                        scrollEnd : (iscroll)=>{this.onScrollEnd(iscroll)}
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
