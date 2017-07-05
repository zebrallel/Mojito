import './style.scss';
import React from 'react';
import ListView from '../../components/ListView';

const data = [];

for(let i=0; i<100; i++){
    data.push(i);
}

const ListViewDemo = ()=>{
    return (
        <div id="ListView">
            <div className="m-title">List View Demo</div>
            <ListView>
                {
                    data.map((item)=>{
                        return <div className="item" key={item}>{item}</div>
                    })
                }
            </ListView>
        </div>
    )
};

export default ListViewDemo;