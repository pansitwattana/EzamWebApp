import React from 'react';
import Layout from '../../components/Layout';
import App from './App';

const title = 'App';
function action() {
  return {
    chunks: ['app'],
    title,
    component: <App title={title} />,
  };
}

export default action;
