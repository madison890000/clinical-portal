import Name from '../components/Name';
import { Card, Skeleton } from '@mui/material';
import InfoItem from '../components/InfoItem';
import styles from './PatientDetail.module.scss';
import { useQuery } from 'react-query';
import { getPatientById } from '../services';

const PatientDetail = ({ id }: { id: string }) => {
    const { data: patient } = useQuery(['getPatientDetail', id], () => getPatientById(id));

    return (
        <>
            {!patient && <Skeleton variant="rectangular" width={800} height={118} />}
            {patient && (
                <Card className={styles.container}>
                    <Name {...patient} />
                    <InfoItem name="sex" value={patient?.sex} />
                    <InfoItem name="age" value={patient?.age} />
                </Card>
            )}
        </>
    );
};

export default PatientDetail;
