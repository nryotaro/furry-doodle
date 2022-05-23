import { ReactNode } from 'react';
import Headline from '../../Headline';
import styles from './Field.module.scss';

interface FieldProps {
    headline: string,
    children: ReactNode,
}

function Field(props: FieldProps) {
    return <div>
        <div className={styles.headline}>
            <Headline>{props.headline}</Headline>
        </div>
        {props.children}
    </div>
}
export default Field;