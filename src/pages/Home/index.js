/**
 * @fileOverView: Home page
 * @author: xuejian.xu
 * @date: 2017/6/9.
 */

import React from 'react';
import styles from './style.scss';

const Home = () => {
    return (
        <div>
            <div>Home Page</div>
            <div className={styles.box}>
                <div className={styles.content}>content</div>
            </div>
        </div>
    )
};

export default Home;
