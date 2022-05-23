import { isTemplateSpan } from 'typescript';
import styles from './index.module.scss';

interface DatalistProps<T> {
    id: string,
    items: T[], 
    valueFactory: (item: T) => string | number
}
function Datalist<T>(props: DatalistProps<T>) {
    return <>
    <input type='text' list={props.id} className={styles.field} placeholder={'Doge'}/>
    <datalist id={props.id}>
        {props.items.map(item => {
            const value = props.valueFactory(item);
            return <option key={value} value={value}></option>
        })}
    </datalist>
    </>
}

export default Datalist;
