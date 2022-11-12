import { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import Name from '../components/Name';
import PatientDetail from '../modules/PatientDetail';


const TabPanel = ({ children, value, index }: any) => {
    return (
        <>
            {value === index && children}
        </>
    )
}

const ClinicianDetail = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };
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
                    <Typography align="center">Clinical Portal</Typography>
                </div>
                <div>
                    <Name
                        title="title" firstName={'firstName'} familyName={'familyName'}
                    />
                </div>
            </div>

            <Tabs value={activeTab} onChange={handleChange}>
                <Tab label="item1" />
                <Tab label="item2" />
            </Tabs>
            <TabPanel value={activeTab} index={0}>
                <PatientDetail id={'test'} />
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
                <PatientDetail id={'test2'} />
            </TabPanel>
        </>
    )
}

export default ClinicianDetail
