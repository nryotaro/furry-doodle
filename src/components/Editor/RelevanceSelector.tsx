import styles from './RelevanceSelector.module.scss';

function RelevanceSelector() {
    return <div className={styles.container}>
        <div className={styles.pseudoCheck}>
            <input
                type='radio'
                name='classification'
                value='relevant'
                id='editorClassificationRelevant' />
        </div>
        {/* <div className={styles.pseudoCheck}></div> */}
        <label htmlFor='editorClassificationRelevant'>Relevant</label>
        <div className={styles.pseudoUncheck}>
            <input
                type='radio'
                name='classification'
                value='irrevant'
                id='editorClassificationIrrelevant' />
        </div>

        {/* <div className={styles.pseudoCheck}></div> */}
        <label htmlFor='editorClassificationIrrelevant'>Irrelevant</label>
    </div>
}

export default RelevanceSelector;