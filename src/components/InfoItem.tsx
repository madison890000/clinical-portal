import { Typography } from '@mui/material';
import { capitalize } from '../utils';

export const InfoItem = ({
                             name,
                             value,
                         }: { name: string; value: string | number }) => {

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={{
                height: 32,
                marginRight: 12
            }}>{capitalize(name)}:
            </div>
            <Typography variant="overline" display="block">
                {value}
            </Typography>
        </div>
    )
}

export default InfoItem
