import styles from './App.module.scss';
import SearchForm from './components/Search/Form';
import SearchResults from './components/Search/Results';
import useSearch from './hooks/search/useSearch';

function App() {
  const [companies] = useSearch();
  return <div className={styles.container}>
    <SearchForm/>
    <SearchResults companies={companies}/>
  </div>;
}

export default App;
