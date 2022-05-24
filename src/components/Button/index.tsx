import { ReactNode } from 'react';
import styles from './index.module.scss';

interface ButtonProps {
    children: ReactNode,
    enable: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}
export function ActionButton(props: ButtonProps) {
    return <BaseButton
        enable={props.enable}
        buttonStyle={styles.active}
        onClick={props.onClick}>
        {props.children}
    </BaseButton>
}

export function DangerButton(props: ButtonProps) {
    return <BaseButton
        enable={props.enable}
        buttonStyle={styles.danger}
        onClick={props.onClick}>
        {props.children}
    </BaseButton>
}

interface BaseButtonProps {
    children: ReactNode,
    enable: boolean,
    buttonStyle: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

function BaseButton({ children, onClick, enable, buttonStyle }: BaseButtonProps) {
    const enableStyle = enable ? buttonStyle : styles.disable;
    return <button
        className={`${styles.container} ${enableStyle}`}
        onClick={onClick}>
        {children}
    </button>
}