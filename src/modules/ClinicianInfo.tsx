import Name from '../components/Name';
import { IClinician } from '../types';
import Logout from './Logout';
import { Card } from '@mui/material';
import InfoItem from '../components/InfoItem';

const ClinicianInfo = ({ ...clinician }: IClinician) => {
    return (
        <Card style={{
            margin: 10,
            padding: 20
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Name{...clinician} />
                <Logout />
            </div>
            <InfoItem name="username" value={clinician?.username} />
            <InfoItem name="role" value={clinician?.role} />
        </Card>
    )
}

export default ClinicianInfo
