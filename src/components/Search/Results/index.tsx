import styles from './index.module.scss';
import Editor from '../../Editor';
import { useState } from 'react';

function Results() {
  const [editorEnable, setEditorEnable] = useState<boolean>(false);

  return <div>
    <button onClick={() => {
      setEditorEnable(true);
      }}>
      results
    </button>
    <Editor enable={editorEnable}/>
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