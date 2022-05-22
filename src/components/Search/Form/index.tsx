import Button from '../../Button';
import Fragment from '../../Fragment';
import Headline from '../../Headline';
import styles from './index.module.scss';

function Form() {

  return <Fragment>
    <div className={styles.options}>
      <div>
        <div><Headline>Industry</Headline></div>
        <input type='text' list="industries"/>
        <datalist id="industries">
          <option value='dogeeeeeeeeeeeeeeeee'>option1</option>
          <option value='doge2'>option2</option>
          <option value='doge3'>option3</option>
        </datalist>
      </div>
      <div>
        <div>Total Funding Amount</div>
        <input />
      </div>
      <div>
        <div>Last Funding Date</div>
        <input />
        <input />
      </div>
    </div>
    <div className={styles.search}>
      <Button>Search</Button>
    </div>
  </Fragment>
}

export default Form;