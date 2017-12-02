import React from 'react';
import Calculate from '../components/Calculate';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../reducers';


export default withRedux(makeStore)(() => {
    return <Calculate />
})