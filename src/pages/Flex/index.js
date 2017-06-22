import styles from './style.scss';

import React, {Component} from 'react';

class Flex extends Component{
    render(){
        return (
            <div>
                <div>flex-grow: 这是属性设置的其实是剩余空间分配的比例值，而不是当前元素自身所占的比例</div>
                <br/>
                <div className={styles.box}>
                    <div className={styles.left}>
                        <span className={styles.contentLeft}>cLeft</span>
                    </div>
                    <div className={styles.right}>
                        <span className={styles.contentRight}>cRight</span>
                    </div>
                </div>
                <br/>
                <div>flex-basis: 这个属性的意思是，我们应该以这个值作为元素的初始宽度，计算出剩余空间的大小</div>
                <br/>
                <div className={styles.box}>
                    <div className={styles.left2}>260px</div>
                    <div className={styles.right2}>340px</div>
                </div>
                <br/>
                <div>让我们来做一个简单的两栏布局：</div>
                <br/>
                <div className={styles.demo3}>
                    <div className={styles.demo3Left}>400px</div>
                    <div className={styles.demo3Right}>fill the remain</div>
                </div>
            </div>
        )
    }
}

export default Flex;