import styles from './IndustryDropdown.module.scss';
import useIndustryDropdown from '../../../hooks/search/form/useIndustryDropdown';
import Datalist from '../../Dropdown/Datalist';
import Headline from '../../Headline';


function IndustryDropbown() {
    const [industries, createIndustryKey] = useIndustryDropdown();
    if(industries.length === 0)
        return <></>;

    return <div className={styles.container}>
        <div className={styles.headline}>
            <Headline>Industry</Headline>
        </div>
        <Datalist 
            id='industries'
            items={industries} 
            placeholder='Industry'
            valueFactory={createIndustryKey} />
    </div>
}

export default IndustryDropbown;