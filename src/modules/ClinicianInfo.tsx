import Name from '../components/Name';
import { IClinician } from '../types';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import styles from './ClinicianInfo.module.scss';
import React from 'react';

const ClinicianInfo = ({ ...clinician }: IClinician) => {
    return (
        <Card title="Clinician" className={styles.container}>
            <CardContent>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <Avatar alt="" src="/static/images/avatar/1.jpg" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" component="div">
                            <Name {...clinician} />
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {clinician?.role}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ClinicianInfo;
