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
                body , #__next , #__next + div , .index-container{
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </div>
        )
    }

}

export default withRedux(makeStore , state => state , actions)(Index);