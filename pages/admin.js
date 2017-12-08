import axios from 'axios';
import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import { makeStore } from '../reducers';
import * as actions from '../actions';
import keys from '../config/keys';
import WaitLoading from '../components/WaitLoading'

const uuidv4 = require('uuid/v4');

export class Admin extends Component {
    constructor(props) {
        super(props);
        this.renderContent = this.renderContent.bind(this)
    }
    componentDidMount(){
        this.props.fetchData();
    }

    renderContent(){
        const {database} = this.props
        if(database.length !== 0){
            return database.map( (data , index) => {
                return (
                    <div key={uuidv4()} className="card">
                        <div className="actions">
                            <button className="delete-btn success">สำเร็จ</button>
                            <button className="delete-btn fail">ไม่สำเร็จ</button>
                        </div>
                        <p className="text">รายการที่ {index + 1}</p>
                        <p className="text">วันที่ทำรายการ {Date(data.date)}</p>
                        <p className="text">ชื่อ: คุณ <strong>{data.name}</strong>&nbsp;&nbsp;เบอร์ติดต่อ <strong>{data.phone}</strong> อายุ {data.age} ปี </p> 
                        <p className="text">สัญญา plan1 : ความคุ้มครอง {data.plan.plan1} บาท , สัญญา plan2 : ความคุ้มครอง {data.plan.plan2} บาท</p> 
                        <p className="text">สัญญา plan3 : ความคุ้มครอง {data.plan.plan3} บาท , สัญญา plan4 : ความคุ้มครอง {data.plan.plan4} บาท</p> 
                        <p className="text">เบี้ยประกันรวม {data.insuranceCost} บาท/เดือน</p> 
                        <p className="text">ขั้นตอนดำเนินการ : {data.process}</p> 
                        <style jsx>{`
                            
                            .card {
                                font-family: Prompt;
                                position: relative;
                                margin: 20px auto;
                                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                                width: 90%;
                                padding: 2px 16px;
                            }
                            
                            .card:hover {
                                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                            }
                            button{
                                display: block;
                                font-family : inherit;
                                font-size: 1em;
                                -webkit-border-radius: 3;
                                -moz-border-radius: 3;
                                border-radius: 15px;
                                -webkit-box-shadow: 5px 5px 12px #666666;
                                -moz-box-shadow: 5px 5px 12px #666666;
                                box-shadow: 5px 5px 12px #666666;
                                color: #ffffff;
                                
                                padding: 10px 20px 10px 20px;
                                margin:8px;
                                text-decoration: none;
                                border: none;
                                
                            }
                            button:hover{
                                cursor: pointer;
                                
                                text-decoration: none;
                            }
                            button:focus{
                                outline: none;
                            }
                            .success{
                                background: rgb(67, 255, 57);
                            }
                            .success:hover{
                                background: green;
                            }
                            .fail{
                                background: rgb(240, 105, 116);
                            }
                            .fail:hover{
                                background: red;
                            }
                            .actions{
                                font-family: Prompt;
                                position: absolute;
                                width:10%;
                                right: 10px;
                                top: 50%;
                                transform: translateY(-50%);
                            }
                        `}</style>
                    </div>
                )
            })
        }
        return <WaitLoading />
    }

    render() {
        return (
            <div>
                { this.renderContent() }
            </div>
        )
    }
}

export default  withRedux(makeStore , state => state , actions)(Admin)
