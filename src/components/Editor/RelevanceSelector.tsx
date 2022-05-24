import useRelevantSelector from '../../hooks/editor/useRelevantSelector';
import styles from './RelevanceSelector.module.scss';

function RelevanceSelector() {

    const [relevant, setRelevant] = useRelevantSelector();

    let relevantStyle;
    let irrlevantStyle;
    if(relevant) {
        relevantStyle = styles.check;
        irrlevantStyle = styles.uncheck;
    } else {
        relevantStyle = styles.uncheck;
        irrlevantStyle = styles.check;
    }

    return <div className={styles.container}>
        <div className={relevantStyle}>
            <input
                type='radio'
                name='classification'
                value='relevant'
                id='editorClassificationRelevant' 
                onChange={() => {setRelevant(true)}}
                />
        </div>
        <label htmlFor='editorClassificationRelevant'>Relevant</label>
        <div className={irrlevantStyle}>
            <input
                type='radio'
                name='classification'
                value='irrevant'
                id='editorClassificationIrrelevant'
                onChange={() => {setRelevant(false)}}
                />
        </div>
        <label htmlFor='editorClassificationIrrelevant'>Irrelevant</label>
    </div>
}

export default RelevanceSelector;