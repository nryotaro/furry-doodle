import Select from 'react-select';
import Field from './Field';
import styles from './ClassificationStatus.module.scss';

interface ClassificationStatusProps {

}

function ClassificationStatus(props: ClassificationStatusProps) {
    return <Field headline='Classification Status'>
        <div className={styles.content}>
            <Select isMulti={true} options={[{value: 'a', label: 'Classified'}, {value: 'b', label: 'Not classified'}]} />
        </div>
    </Field>
}

export default ClassificationStatus;