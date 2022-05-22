import styles from './index.module.scss';
import Editor from '../../Editor';
import { useState } from 'react';
import useEditor from '../../../hooks/useEditor';

function Results() {
  const [company, setCompany] = useEditor();

  return <div>
    <button onClick={() => {
      setCompany('doge');
      }}>
      results
    </button>
    <Editor company={company} setCompany={setCompany}/>
    <table>
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>a</td>
          <td>b</td>
        </tr>
        <tr>
          <td>a</td>
          <td>b</td>
        </tr>
      </tbody>
    </table>
  </div>;
}

export default Results;