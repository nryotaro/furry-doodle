import styles from './index.module.scss';
import Editor from '../../Editor';
import { useState } from 'react';
import useEditor from '../../../hooks/useEditor';
import Fragment from '../../Fragment';

function Results() {
  const [company, setCompany] = useEditor();

  return <Fragment>
    <button onClick={() => {
      setCompany('doge');
      }}>
      results
    </button>
    <Editor company={company} setCompany={setCompany}/>
    <table className={styles.results} width='100%'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Classification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href='https://sp-edge.com'>doge</a></td>
          <td>b</td>
          <td>Relevant</td>
        </tr>
        <tr onClick={(e) => console.log('foob')}>
          <td>a</td>
          <td>b</td>
          <td>Irrelevant</td>
        </tr>
        <tr>
          <td>a</td>
          <td>b</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </Fragment>
}



export default Results;