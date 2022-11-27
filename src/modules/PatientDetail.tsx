import Name from '../components/Name';
import { Card, CardContent, Skeleton } from '@mui/material';
import InfoItem from '../components/InfoItem';
import styles from './PatientDetail.module.scss';
import { useQuery } from 'react-query';
import { getPatientById } from '../services';
import React from 'react';

const PatientDetail = ({ id }: { id: string }) => {
    const { data: patient } = useQuery(['getPatientDetail', id], () => getPatientById(id));

    return (
        <>
            {!patient && <Skeleton variant="rectangular" width={800} height={300} />}
            {patient && (
                <Card className={styles.container}>
                    <CardContent>
                        <Name {...patient} />
                    </CardContent>
                    <CardContent>
                        <InfoItem name="sex" value={patient?.sex} />
                        <InfoItem name="age" value={patient?.age} />
                    </CardContent>
                </Card>
            )}
        </>
    );
};

export default PatientDetail;
