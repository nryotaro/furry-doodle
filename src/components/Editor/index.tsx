import { useEffect, useState } from 'react';
import styles from './index.module.scss';

type EditorProps = {
  enable: boolean,
  toggle: (toggle: boolean) => void,
};

function Editor(props: EditorProps) {
  const [enable, setEnable] = useState<boolean>(props.enable);

  useEffect(() => {
    console.log('effect');
    setEnable(props.enable);
  },
    [props.enable]);
  const style = {
    display: enable ? 'block' : 'none'
  };
  return <div id="myModal" className={styles.modal} 
  style={style} onClick={(e) => {
    // return false;
    e.preventDefault();
    e.stopPropagation();
    setEnable(false);
  }}>
    <div className={styles.modalContent}>
      <div className={styles.modalHeader}>
        <span className="close">&times;</span>
        <h2>Modal Header</h2>
      </div>
      <div className={styles.modalBody}>
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
      <div className={styles.modalFooter}>
        <h3>Modal Footer</h3>
      </div>
    </div>

  </div>
}

export default Editor;