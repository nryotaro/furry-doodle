import styles from './IndustryDropdown.module.scss';
import useIndustryDropdown from '../../../hooks/search/form/useIndustryDropdown';
import Datalist from '../../Dropdown/Datalist';
import Headline from '../../Headline';
import Field from './Field';


function IndustryDropbown() {
    const [industries, createIndustryKey] = useIndustryDropdown();

    return <Field headline={'Industry*'}>
        <div className={styles.content}>
            <Datalist
                items={industries}
                placeholder='Industry'
                valueFactory={createIndustryKey} />
        </div>
    </Field>
}

export default IndustryDropbown;