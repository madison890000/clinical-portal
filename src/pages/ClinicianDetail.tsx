import { SyntheticEvent, useCallback, useContext, useEffect, useState } from 'react';
import { Divider, Skeleton, Tab, Tabs, Typography } from '@mui/material';
import PatientDetail from '../modules/PatientDetail';
import ClinicianInfo from '../modules/ClinicianInfo';
import { AppContext } from '../contexts/AppContext';
import TabPanel from '../components/TabPanel';
import styles from './ClinicianDetail.module.scss';
import { LoginStatus } from '../types';
import { useNavigate } from 'react-router';
import { PORTAL_NAME, ROUTES } from '../constants';

const ClinicianDetail = () => {
    const { clinician, patients, loginStatus } = useContext(AppContext);
    const [activeTab, setActiveTab] = useState<number>(0);
    const handleChange = useCallback(
        (event: SyntheticEvent, newValue: number) => {
            setActiveTab(newValue);
        },
        [setActiveTab]
    );
    const navigate = useNavigate();
    useEffect(() => {
        if (loginStatus !== LoginStatus.Login) {
            navigate(ROUTES.Login);
        }
    }, [loginStatus, navigate]);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.portalTitleContainer}>
                    <Typography variant="h4" align="center">
                        {PORTAL_NAME}
                    </Typography>
                </div>
                {!clinician && <Skeleton variant="rectangular" width={300} height={118} />}
                {clinician && <ClinicianInfo {...clinician} />}
            </div>

            <Divider />
            <Tabs value={activeTab} onChange={handleChange}>
                {patients?.map((patient, index) => (
                    <Tab
                        style={{ minWidth: 400 }}
                        label={`${patient.name} (${patient.id})`}
                        key={patient.id}
                        value={index}
                    />
                ))}
            </Tabs>
            {patients?.map((patient, index) => (
                <TabPanel value={activeTab} index={index} key={patient?.id}>
                    <PatientDetail id={patient?.id} />
                </TabPanel>
            ))}
        </>
    );
};

export default ClinicianDetail;
