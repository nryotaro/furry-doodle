import {ActionButton} from '../../Button';
import Fragment from '../../Fragment';
import ClassificationStatus from './ClassificationStatus';
import CompanyName from './CompanyName';
import styles from './index.module.scss';
import IndustryDropbown from './IndustryDropdown';
import LastFundingDate from './LastFundingDate';
import TotalFundingAmount from './TotalFundingAmount';

function Form() {

  return <Fragment>
    <div className={styles.options}>
      <IndustryDropbown/>
      <TotalFundingAmount/>
      <LastFundingDate/>
      <ClassificationStatus/>
      <CompanyName/>
    </div>
    <div className={styles.search}>
      <ActionButton enable={true} onClick={() => {}}>Search</ActionButton>
    </div>
  </Fragment>
}

export default Form;