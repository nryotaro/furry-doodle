import {DangerButton, ActionButton} from '../Button';
import Headline from '../Headline';
import styles from './index.module.scss';

interface EditorProps {
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
    <div className={styles.modalContent} onClick={(e) => {e.stopPropagation();}}>
      <span className={styles.close}>&times;</span>
      <div>
        <Headline>Classification</Headline>
      </div>
      <div className={styles.properties}>
        <div className={styles.property}>
          <div className={styles.propertyName}>Company</div>
          <div className={styles.propertyValue}>Doge</div>
        </div>
        <div className={styles.property}>
          <div className={styles.propertyName}>Industry</div>
          <div className={styles.propertyValue}>Pet Care Tech</div>
        </div>
        <div className={styles.property}>
          <div className={styles.propertyName}>Industry Relevance</div>
          <div className={styles.relevance}>
            <input 
                type='radio' 
                name='classification' 
                value='relevant' 
                id='editorClassificationRelevant'/>
            <div className={styles.pseudoCheck}></div>
            <label htmlFor='editorClassificationRelevant'>Relevant</label>
            <input type='radio' name='classification' value='irrevant' id='editorClassificationIrrelevant'/>
            <div className={styles.pseudoCheck}></div>
            <label htmlFor='editorClassificationIrrelevant'>Irrelevant</label>
          </div>
        </div>
        <div className={styles.property}>
          <div className={styles.propertyName}>Comment</div>
          <textarea className={styles.comment}></textarea>
        </div>
      </div>
      <div>
        <DangerButton enable={false} onClick={(e) => {}}>Delete</DangerButton>
        <ActionButton enable={true} onClick={e=> {}}>Save</ActionButton>
      </div>
    </div>
  </div>
}

export default Editor;