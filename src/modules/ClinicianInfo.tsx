import Name from '../components/Name';
import { IClinician } from '../types';
import Logout from './Logout';
import { Card } from '@mui/material';
import InfoItem from '../components/InfoItem';
import styles from './ClinicianInfo.module.scss';

const ClinicianInfo = ({ ...clinician }: IClinician) => {
    return (
        <Card className={styles.container}>
            <div className={styles.name}>
                <Name {...clinician} />
                <Logout />
            </div>
            <InfoItem name="username" value={clinician?.username} />
            <InfoItem name="role" value={clinician?.role} />
        </Card>
    );
};

export default ClinicianInfo;
