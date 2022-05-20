import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Helmet } from 'react-helmet';

function App() {
  return <div className='container'>
    <Helmet>
      <title>Demo</title>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    </Helmet>
    fuga
  </div>;
}

export default App;
