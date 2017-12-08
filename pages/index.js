import Link from 'next/link'
import React  , { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import { makeStore } from '../reducers';
import { PlanFIELD } from '../components/FIELD'
import * as actions from '../actions';
import SelectPlan from '../components/SelectPlan';
import Router from 'next/router';
import LandingForm from '../components/LandingForm';
import WaitLoading from '../components/WaitLoading'

const uuidv4 = require('uuid/v4');


class Index extends Component {
    render(){
        return (
        <div className="index-container">
            {this.props.loading && <WaitLoading />}
            <div style={{width :"70%" ,position : "absolute" , left : "15%"}}>
                <LandingForm />
            </div>
            <style jsx global>{`
                body , #__next , #__next + div , .index-container{
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
        )
    }

}

export default withRedux(makeStore , state => state , actions)(Index);