import { useEffect, useState } from 'react';
import styles from './index.module.scss';

type EditorProps = {
  company: string | null,
  setCompany: (company: string | null) => void,
};

function Editor(props: EditorProps) {

  if (props.company == null)
    return <></>;

  return <div className={styles.modal} onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    props.setCompany(null);
  }}>
    <div className={styles.modalContent}>
      <span className={styles.close}>&times;</span>
      <p>Some text in the Modal..</p>
    </div>
  </div>
}

export default Editor;