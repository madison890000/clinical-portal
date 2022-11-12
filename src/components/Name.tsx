import { IPerson } from '../types';
import styles from './Name.module.scss';

export const Name = ({
                         title,
                         firstName,
                         preferredName,
                         middleName,
                         familyName,
                         suffix
                     }: IPerson) => {

    let prefixName: React.ReactNode;
    if (preferredName) {
        prefixName = (
            <>(
                <div className={styles.text}>{preferredName}</div>
                )</>
        )
    } else {
        prefixName = (
            <>
                <div className={styles.text}>{firstName}</div>
            </>
        )
    }
    return (
        <div className={styles.container}>
            <div className={styles.text}>{title}</div>
            {prefixName}
            <div className={styles.text}>{middleName}</div>
            <div className={styles.text}>{familyName}</div>
            <div className={styles.text}>{suffix}</div>
        </div>
    )
}

export default Name
