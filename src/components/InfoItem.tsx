import { Typography } from '@mui/material';
import { capitalize } from '../utils';
import styles from './InfoItem.module.scss';

export const InfoItem = ({ name, value }: { name: string; value: string | number }) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>{capitalize(name)}:</div>
            <Typography variant="overline" display="block">
                {value}
            </Typography>
        </div>
    );
};

export default InfoItem;
