import { IPerson } from '../types';
import styles from './Name.module.scss';

export const Name = ({ title, firstName, preferredName, middleName, familyName, suffix }: IPerson) => {
    let prefixName = preferredName ? `(${preferredName})` : firstName;
    return (
        <div className={styles.container}>
            <div className={styles.text}>{title}</div>
            <div className={styles.text}>{prefixName}</div>
            <div className={styles.text}>{middleName}</div>
            <div className={styles.text}>{familyName}</div>
            <div className={styles.text}>{suffix}</div>
        </div>
    );
};

export default Name;
