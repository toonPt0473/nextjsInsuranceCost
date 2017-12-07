import Link from 'next/link'
import React  , { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import { makeStore } from '../reducers';
import { PlanFIELD } from '../components/FIELD'
import * as actions from '../actions';
import SelectPlan from '../components/SelectPlan';
import Router from 'next/router'
import LandingForm from '../components/LandingForm'

const uuidv4 = require('uuid/v4');


class Index extends Component {
    loadingComponent(){
        return (
            <div className="loading">
                <div className="loader"></div>
            </div>
        )
    }
    render(){
        return (
        <div>
            {this.props.loading && this.loadingComponent()}
            <div style={{width :"70%" ,position : "absolute" , left : "15%"}}>
                <LandingForm />
            </div>
            <style jsx global>{`
                    .loading{
                        position: absolute;
                        background: rgba(0, 0, 0, 0.7);
                        width: 100%;
                        height: 500px;
                        z-index: 1
                    }
                    .loader {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%);
                        border: 16px solid #f3f3f3;
                        border-radius: 50%;
                        border-top: 16px solid #3498db;
                        width: 120px;
                        height: 120px;
                        -webkit-animation: spin 2s linear infinite; /* Safari */
                        animation: spin 2s linear infinite;
                      }
                      
                      /* Safari */
                      @-webkit-keyframes spin {
                        0% { -webkit-transform: rotate(0deg); }
                        100% { -webkit-transform: rotate(360deg); }
                      }
                      
                      @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                `}
                </style>
        </div>
        )
    }

}

export default withRedux(makeStore , state => state , actions)(Index);