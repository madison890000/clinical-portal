import Name from '../components/Name';
import { useCallback, useEffect, useState } from 'react';
import { getPatientById } from '../services';
import { IPatient } from '../types';
import { Card, Skeleton } from '@mui/material';
import InfoItem from '../components/InfoItem';
import styles from './PatientDetail.module.scss';

const PatientDetail = ({ id }: { id: string }) => {
    const [patient, setPatient] = useState<IPatient>();
    const getPatientDetail = useCallback(async (patientId: string) => {
        const detail = await getPatientById(patientId);
        setPatient(detail)
    }, [setPatient])
    useEffect(() => {
        getPatientDetail(id);
    }, [id, getPatientDetail])
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
    )
}

export default PatientDetail
