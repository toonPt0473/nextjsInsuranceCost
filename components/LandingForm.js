import { connect } from 'react-redux';
import axios from 'axios'
import Link from 'next/link';
import React  , { Component } from 'react';
import Router from 'next/router';

import { PlanFIELD } from './FIELD'
import * as actions from '../actions';
import SelectPlan from './SelectPlan';

const uuidv4 = require('uuid/v4');

class LandingForm extends Component {
    constructor(props){
        super(props);
        this.sendFormValues = this.sendFormValues.bind(this)
        this.planComponent = this.planComponent.bind(this)
        this.sendFormValues = this.sendFormValues.bind(this)
    }
    
    state = {
        formSend : false,
        age : null,
        sex : null,
        insuranceCost: 0,
        ...this.initialState()
    }

    initialState(){
        var thisState = Object.assign({})
        PlanFIELD.forEach(({ name }) => {
            thisState = {...thisState , [name]: null}
        })
        return thisState
    }

    planComponent(){
        return PlanFIELD.map(({name , values , image , content}) => {
            return (
                <SelectPlan 
                    name={name}
                    validate={this.state.formSend && !this.state[name]}
                    key={uuidv4()} 
                    content={content} 
                    values={values} 
                    image={image} 
                    addValue={(value) => this.setState({[name]: value})}
                    active={this.state[name]}
                />
            )
        })
    }

    renderAge(){
        var age = []
        for(var i = 0 ; i < 100 ; i++){
            age.push(<option value={i} key={i}>{i}</option>)
        }
        return age
    }

    async sendFormValues() {
        await this.props.onLoad()
        await this.setState({formSend : true});
        const { plan1 , plan2 , plan3 , plan4 , sex , age } = this.state
        const insuranceCost = ((plan1/1000 + plan2/3000 + plan3/2000 + plan4/1500) * age/10 * sex).toFixed()
        await this.setState({ insuranceCost })

        // stateValue is array of values in state
        let stateValue = Object.values(this.state)

        // emptyValue find null and undefined values 
        let emptyValues = stateValue.filter(value => value === null || value === undefined);

        // not have empty value then send data to server and take it to db
        if(emptyValues.length === 0){
            let name = prompt('name : ') , 
                phone = null,
                regexCheckPhone = null;
            
            if(name){
                phone = prompt('phone : ');
                regexCheckPhone = /^[0-9]*$/.test(phone);
            }
             
            while(!regexCheckPhone && phone !== null){
                phone = prompt('pls correct phone number');
                regexCheckPhone = /^[0-9]*$/.test(phone)
            }
            if(phone !== null && name !== null){
                alert(`เราจะรีบติดต่อคุณ ${name} ที่เบอร์ ${phone} ภายใน 24 ชม ขอบคุณที่ใช้บริการ`)
                await this.props.sendFormToServer({...this.state , name , phone })
            }
            
            //window.location = "http://www.google.co.th"
        }
        this.props.loadSuccess();
        
    }

    render() {
        const { plan1 , plan2 , plan3 , plan4 , sex , age } = this.state
        const insuranceCost = ((plan1/1000 + plan2/3000 + plan3/2000 + plan4/1500) * age/10 * sex).toFixed()
        return(
            <div>
                <div style={{textAlign: "center"}}>
                    <button 
                        className={this.state.sex === 1 ? "active" : ""}
                        onClick={() => this.setState({sex : 1})}
                        style={{marginRight:10}}
                    >ชาย
                    </button>
                    <button 
                        className={this.state.sex === 2 ? "active" : ""}
                        onClick={() => this.setState({sex : 2})}
                    >หญิง
                    </button>
                    {this.state.formSend && !this.state.sex && <div className="warning">pls select your gentle</div>}
                </div>

                <div style={{textAlign: "center"}}>
                    <div>อายุ</div>
                    <select name="age" onChange={(e) => this.setState({age : e.target.value})}>
                        {this.renderAge()}
                    </select>
                    {this.state.formSend && !this.state.age && <div className="warning">pls select your age</div>}
                </div>

                <div style={{textAlign: "center"}}>
                    <h1 style={{color: "#427af4"}}>เบี้ยประกัน : {insuranceCost}</h1>
                </div>
                
                {this.planComponent()}

                <div style={{textAlign: "center"}}>
                    <Link href="/calculate">
                        <button style={{marginRight: 20}} >เลือกแบบประกันตามความต้องการของคุณ</button>
                    </Link>
                    <button onClick={this.sendFormValues}>ซื้อประกันนี้</button>
                </div>

                <style jsx global>{`
                    .active {
                        background: #427af4;
                        color: white
                    }
                    .warning{
                        color : red
                    }
                `}
                </style>
            </div>
        )
    }
}

export default connect(state => state , actions)(LandingForm);