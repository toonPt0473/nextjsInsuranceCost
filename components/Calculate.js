import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Link from 'next/link';

class Calculate extends Component {

    render() {
        return (
        <h1>
            this is calculate page 
            <Link href="/">
                <button>back to index page</button>
            </Link>
        </h1>
        )
    }
}

export default connect(state => state , actions)(Calculate)