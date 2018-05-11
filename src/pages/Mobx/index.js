import './style.scss'
import * as React from 'react'
import { observable, action, autorun, computed } from 'mobx'

class Mobx extends React.Component {
    @observable count

    constructor(){
        super()

        this.count = [1,2,3,4]
    }
    @computed get total(){
        return this.count.map((item) => item * item)
    }
    componentDidMount(){
        console.log(this.count);
        autorun(() => {
            console.log(this.total);
        })
        this.count.replace([2,3,4,5])
    }
    render() {
        return <div id="Mobx">mobx</div>
    }
}

export default Mobx
