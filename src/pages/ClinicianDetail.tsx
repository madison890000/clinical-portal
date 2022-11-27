import React, { SyntheticEvent, useCallback, useContext, useEffect, useState } from 'react';
import { Divider, Grid, Skeleton, Tab, Tabs, Typography } from '@mui/material';
import PatientDetail from '../modules/PatientDetail';
import ClinicianInfo from '../modules/ClinicianInfo';
import { AppContext } from '../contexts/AppContext';
import TabPanel from '../components/TabPanel';
import styles from './ClinicianDetail.module.scss';
import { LoginStatus } from '../types';
import { useNavigate } from 'react-router';
import { PORTAL_NAME, ROUTES } from '../constants';
import ResponsiveAppBar from '../modules/AppBar';
import Groups2Icon from '@mui/icons-material/Groups2';

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
            <ResponsiveAppBar />
            <div className={styles.container}>
                <div className={styles.portalTitleContainer}>
                    <Typography variant="h6" align="center">
                        {PORTAL_NAME}
                    </Typography>
                </div>
                {!clinician && <Skeleton variant="rectangular" width={300} height={130} />}
                {clinician && <ClinicianInfo {...clinician} />}
            </div>

            <Divider variant="middle" />
            <Grid container spacing={2} className={styles.patients}>
                <Grid item>
                    <Groups2Icon />
                </Grid>
                <Grid item>
                    <Typography variant="h6" align="left">
                        Patients
                    </Typography>
                </Grid>
            </Grid>
            <Tabs value={activeTab} onChange={handleChange}>
                {patients?.map((patient, index) => (
                    <Tab label={`${patient.name} (${patient.id})`} key={patient.id} value={index} />
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
