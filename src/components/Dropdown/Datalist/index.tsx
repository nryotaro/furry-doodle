import styles from './index.module.scss';
import Select from 'react-select';

interface DatalistProps<T> {
    id: string,
    placeholder: string,
    items: T[],
    valueFactory: (item: T) => string | number
}
function Datalist<T>(props: DatalistProps<T>) {
    const options = props.items.map((item) => {
        return {
            value: item,
            label: props.valueFactory(item),
        }
    })
    return <div>
        <Select 
            options={options}
            placeholder={props.placeholder}
            onChange={(i) => {
                console.log(i)
            }} />
    </div>


    // return <div >
    //     <input type='text' list={props.id}
    //         className={styles.field}
    //         placeholder={props.placeholder} />
    //     <div className={styles.arrow} />
    //     <datalist id={props.id}>
    //         {props.items.map(item => {
    //             const value = props.valueFactory(item);
    //             return <option key={value} value={value}></option>
    //         })}
    //     </datalist>
    // </div>
}

export default Datalist;
