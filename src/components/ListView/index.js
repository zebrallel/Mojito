import './style.scss';
import React, {Component} from 'react';

class ListView extends Component{
    container;

    render(){
        return (
            <div className="m-listview" ref={(dom)=>{this.container = dom;}}>
                {this.props.children}
            </div>
        )
    }
}

export default ListView;