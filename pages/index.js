import Link from 'next/link'
import React  , { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import { makeStore } from '../reducers';
import { PlanFIELD } from '../components/FIELD'
import * as actions from '../actions';
import SelectPlan from '../components/SelectPlan';
import Router from 'next/router';
import LandingForm from '../components/LandingForm';
import WaitLoading from '../components/WaitLoading';
import InsuranceDetail from '../components/InsuranceDetail'

const uuidv4 = require('uuid/v4');


class Index extends Component {
    render(){
        return (
        <div className="index-container">
            {this.props.loading && <WaitLoading />}
            <div style={{width :"70%" ,position : "relative" , left : "15%"}}>
                <LandingForm />
            </div>
            <style jsx global>{`
                h1 ,h2 ,h3 ,h4 ,h5 ,h6 ,p{
                    margin: 7px 0px;
                }
                body , #__next , #__next + div , .index-container{
                    height: 100%;
                    padding: 0;
                    margin: 0;
                    font-family: Prompt;
                }
                button{
                    font-family : inherit;
                    font-size: 1em;
                    -webkit-border-radius: 3;
                    -moz-border-radius: 3;
                    border-radius: 15px;
                    -webkit-box-shadow: 5px 5px 12px #666666;
                    -moz-box-shadow: 5px 5px 12px #666666;
                    box-shadow: 5px 5px 12px #666666;
                    color: #ffffff;
                    background: #7b99ab;
                    padding: 10px 20px 10px 20px;
                    margin:8px;
                    text-decoration: none;
                    border: none;
                    
                }
                button:hover{
                    cursor: pointer;
                    background: #3cb0fd;
                    text-decoration: none;
                }
                button:focus{
                    text-decoration: none;
                    border: none;
                    outline: none;
                }

                .active {
                    background: #427af4;
                    color: white;
                }
                .warning{
                    color : red
                }
            `}</style>
        </div>
        )
    }

}

export default withRedux(makeStore , state => state , actions)(Index);