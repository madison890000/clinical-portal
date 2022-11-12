import Name from '../components/Name';
import { useCallback, useEffect, useState } from 'react';
import { getPatientById } from '../services';
import { IPatient } from '../types';

const PatientDetail = ({ id }: { id: string }) => {
    const [patient, setPatient] = useState<IPatient>();
    const getPatientDetail = useCallback(async (patientId: string) => {
        const detail = await getPatientById(patientId);
        setPatient(detail)
    },[setPatient])
    useEffect(() => {
        getPatientDetail(id);
    }, [id,getPatientDetail])
    return (
        <>
            {patient && <Name {...patient} />}
            <div>Sex: {patient?.sex}</div>
            <div>age: {patient?.age}</div>
        </>
    )
}

export default PatientDetail
