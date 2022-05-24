import styles from './App.module.scss';
import SearchForm from './components/Search/Form';
import SearchResults from './components/Search/Results';

function App() {
  return <div className={styles.container}>
    <SearchForm/>
    <SearchResults/>
  </div>;
}

export default App;
