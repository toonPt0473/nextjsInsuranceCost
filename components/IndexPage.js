import React , { Component } from 'react';
import SelectPlan from './SelectPlan';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Link from 'next/link'

class IndexPage extends Component {
    state = {
        age : 0,
        sex : 0
    }

    renderAge(){
        var age = []
        for(var i = 1 ; i < 100 ; i++){
            age.push(<option value={i} key={i}>{i}</option>)
        }
        return age
    }

    handleClick() {

    }
    render() {
        console.log(this.props)
        return(
            <div>
                <div>
                    <button onClick={() => this.setState({sex : 1})}>ชาย</button>
                    <button onClick={() => this.setState({sex : 2})}>หญิง</button>
                </div>
                <div>
                    <span>อายุ</span>
                    <select name="age" onChange={(e) => this.setState({age : e.target.value})}>
                        {this.renderAge()}
                    </select>
                </div>
                <div>
                    เบี้ยประกัน : {this.state.age * 100 * this.state.sex}
                </div>

                <button onClick={this.handleClick}>send</button>
                <SelectPlan />
                <Link href="/calculate">
                    <a>Home</a>
                </Link>
                
            </div>
        )
    }
}


export default connect(state => state , actions)(IndexPage);