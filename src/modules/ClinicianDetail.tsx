import { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';


const TabPanel = ({ children, value, index }: any) => {
    return (
        <>
            {value === index && children}
        </>
    )
}

const ClinicianDetail = () => {
    const [activeTab, setActiveTab] = useState<number>();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <div style={{
                    margin: '40px',
                    height: 200,
                }}>
                    <Typography align="left">Clinical Portal</Typography>
                </div>
                <div>info</div>
            </div>

            <Tabs value={activeTab} onChange={handleChange}>
                <Tab label="item1" />
                <Tab label="item2" />
            </Tabs>
            <TabPanel value={activeTab} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
                Item Two
            </TabPanel>
        </>
    )
}

export default ClinicianDetail
