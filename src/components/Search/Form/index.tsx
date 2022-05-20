import styles from './index.module.scss';

function Form() {
  return <div className={styles.container}>
    <div className={styles.options}>
      <div>
        <div>Industry</div>
        <select>
          <option value='doge'>option1</option>
          <option value='doge2'>option2</option>
          <option value='doge3'>option3</option>
        </select>
      </div>
      <div>
        <div>Total Funding Amount</div>
        <input/>
      </div>
      <div>
        <div>Last Funding Date</div>
        <input />
        <input />
      </div>
    </div>
    <div className={styles.search}>
      <button>Search</button>
    </div>
  </div>;
}

export default Form;