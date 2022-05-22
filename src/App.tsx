import React from 'react';
import './App.scss';
import SearchForm from './components/Search/Form';
import SearchResults from './components/Search/Results';

function App() {
  return <div className='container'>
    <SearchForm/>
    <SearchResults/>
  </div>;
}

export default App;
