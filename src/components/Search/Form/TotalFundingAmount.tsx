import Field from "./Field";
import styles from './TotalFundingAmount.module.scss';

interface TotalFundingAmountProps {

}

function TotalFundingAmount(props: TotalFundingAmountProps) {
    return <Field headline='Total Funding Amount'>
        <div className={styles.content}>
            <USDField/>
            <span className={styles.range}>-</span>
            <USDField/>
        </div>
    </Field>
}

function USDField() {
    return <div className={styles.moneyField}>
        <div className={styles.unit}>$</div>
        <input/>
    </div>
}

export default TotalFundingAmount;