import Field from './Field';
import styles from './CompanyName.module.scss';

interface CompanyNameProps {

}

function CompanyName(props: CompanyNameProps) {
    return <Field headline='Company Name'>
        <div className={styles.content}>
            <input></input>
        </div>
    </Field>
}

export default CompanyName;