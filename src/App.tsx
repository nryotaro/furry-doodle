import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Helmet } from 'react-helmet';
import SearchForm from './components/Search/Form';
import SearchResults from './components/Search/Results';

function App() {
  return <div className='container'>
    <Helmet>
      <title>Demo</title>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    </Helmet>
    <SearchForm/>
    <SearchResults/>
  </div>;
}

export default App;
