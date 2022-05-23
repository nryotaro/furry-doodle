import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import styles from './LastFundingDate.module.scss';
import Field from './Field';
import { useState } from 'react';
interface LastFundingDate {

}

function LastFundingDate(props: LastFundingDate) {
     const [value, setValue] = useState(new Date());
    return <Field headline='Last Funding Date'>
        <div className={styles.datePicker}>
            <DatePicker
                onChange={(e) => { setValue(e!) }}
                selected={value}
                placeholderText='Start Date' />
        </div>
    </Field>
}

export default LastFundingDate;