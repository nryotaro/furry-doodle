import { ReactNode } from 'react';
import styles from './index.module.scss';

interface HeadlineProps {
    children: ReactNode,
}

function Headline(props: HeadlineProps) {
    return <span className={styles.container}>
        {props.children}
    </span>
}

export default Headline;