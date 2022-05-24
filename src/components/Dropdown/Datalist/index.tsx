import styles from './index.module.scss';
import Select from 'react-select';

interface DatalistProps<T> {
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
}

export default Datalist;
