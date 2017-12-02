import React  , { Component } from 'react';
import { makeStore } from '../reducers';
import withRedux from 'next-redux-wrapper';
import IndexPage from '../components/IndexPage';

const Index = () => {
    return <IndexPage />
}

export default withRedux(makeStore)(Index);