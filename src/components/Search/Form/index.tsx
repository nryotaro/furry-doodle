import Button from '../../Button';
import Fragment from '../../Fragment';
import styles from './index.module.scss';
import IndustryDropbown from './IndustryDropdown';
import TotalFundingAmount from './TotalFundingAmount';

function Form() {

  return <Fragment>
    <div className={styles.options}>
      <IndustryDropbown/>
      <TotalFundingAmount/>
      <div>
        <div>Last Funding Date</div>
        <input />
        <input />
      </div>
      <div>classified, not classified</div>
    </div>
    <div className={styles.search}>
      <Button>Search</Button>
    </div>
  </Fragment>
}

export default Form;