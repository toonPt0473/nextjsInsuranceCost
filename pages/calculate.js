import { connect } from 'react-redux';
import axios from 'axios';
import Link from 'next/link';
import React , { Component } from 'react';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';

import { makeStore } from '../reducers';
import * as actions from '../actions';

class Calculate extends Component {
    static async getInitialProps({ store }) {
        const information = store.getState()
        return information
    }
    constructor(props){
        super(props);
        this.textChange = this.textChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        value : ""
    }

    textChange ({target : {value}}){
        this.setState({ value })
    }

    async onSubmit(e){
        Router.push('/')
    }  
    render() {
        
        return (
        <div>
            this is calculate page 
            <Link href="/">
                <button>back to index page</button>
            </Link>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" onChange={this.textChange}/>
                <button type='submit' onClick={this.onSubmit}>send</button>
            </form>
        </div>
        )
    }
}

export default withRedux(makeStore)(Calculate)
