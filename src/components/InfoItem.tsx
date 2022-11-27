import { capitalize } from '../utils';
import styles from './InfoItem.module.scss';
import { Grid } from '@mui/material';

export const InfoItem = ({ name, value, icon }: { name: string; value: string | number; icon?: React.ReactNode }) => {
    return (
        <Grid container spacing={2} className={styles.container}>
            <Grid item>{icon}</Grid>
            <Grid item className={styles.name}>
                {capitalize(name)} :
            </Grid>
            <Grid item className={styles.value}>
                {value}
            </Grid>
        </Grid>
    );
};

export default InfoItem;
