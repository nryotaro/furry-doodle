import {DangerButton, ActionButton} from '../Button';
import Headline from '../Headline';
import styles from './index.module.scss';
import RelevanceSelector from './RelevanceSelector';

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
      <span className={styles.close} onClick={() => props.setCompany(null)}>&times;</span>
      <div className={styles.headline}>
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
          <RelevanceSelector/>
        </div>
        <div className={styles.property}>
          <div className={styles.propertyName}>Comment</div>
          <textarea className={styles.comment}></textarea>
        </div>
      </div>
      <div className={styles.actions}>
        <ActionButton enable={true} onClick={e=> {}}>Save</ActionButton>
        <DangerButton enable={false} onClick={(e) => {}}>Delete</DangerButton>
      </div>
    </div>
  </div>
}

export default Editor;