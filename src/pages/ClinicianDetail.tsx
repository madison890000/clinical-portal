import { useCallback, useContext, useState } from 'react';
import { Divider, Skeleton, Tab, Tabs, Typography } from '@mui/material';
import PatientDetail from '../modules/PatientDetail';
import ClinicianInfo from '../modules/ClinicianInfo';
import { AppContext } from '../contexts/AppContext';


const TabPanel = ({ children, value, index }: any) => {
    return (
        <div style={{ display: value === index ? 'block' : 'none' }}>
            {children}
        </div>
    )
}

const ClinicianDetail = () => {
    const { clinician, patients } = useContext(AppContext);
    const [activeTab, setActiveTab] = useState<number>(0);
    const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    }, [setActiveTab]);
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 20
            }}>
                <div style={{
                    margin: '40px',
                    flex: 'auto',
                    textAlign: 'center'
                }}>
                    <Typography variant="h4" align="center">Clinical Portal</Typography>
                </div>
                {!clinician && <Skeleton variant="rectangular" width={300} height={118} />}
                {clinician && <ClinicianInfo {...clinician} />}
            </div>

            <Divider />
            <Tabs value={activeTab} onChange={handleChange}>
                {
                    patients?.map(patient => (
                        <Tab style={{ minWidth: 500 }} label={`${patient.name} (${patient.id})`}
                             key={patient.id} value={patient.id} />
                    ))
                }
            </Tabs>
            {
                patients?.map(patient => (
                    <TabPanel value={activeTab} index={patient?.id}>
                        <PatientDetail id={patient?.id} />
                    </TabPanel>
                ))
            }
        </>
    )
}

export default ClinicianDetail
