import { ReactNode } from 'react';
import styles from './index.module.scss';

interface FragmentProps {
    children: ReactNode,
};

function Fragment({children}: FragmentProps) {
    return <div className={styles.container}>
        {children}
    </div>
}

export default Fragment;