import { Industries } from '../../../api/industries';
import useIndustryDropdown from '../../../hooks/search/form/useIndustryDropdown';
import Datalist from '../../Dropdown/Datalist';
import Headline from '../../Headline';


function IndustryDropbown() {
    const [industries, createIndustryKey] = useIndustryDropdown();
    if(industries.length == 0)
        return <></>;

    return <div>
        <div><Headline>Industry</Headline></div>
        <Datalist id="industries" items={industries} valueFactory={createIndustryKey} />
    </div>
}

export default IndustryDropbown;