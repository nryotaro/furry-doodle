import { ReactNode } from 'react';
import styles from './index.module.scss';
interface ButtonProps {
    children: ReactNode,
}

function Button({children}: ButtonProps) {
    return <button className={`${styles.container} ${styles.disable}`}>
        {children}
    </button>
}

export default Button;