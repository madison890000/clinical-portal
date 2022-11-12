import Name from '../components/Name';
import { IClinician } from '../types';
import Logout from './Logout';

const ClinicianInfo = ({...clinician}: IClinician) => {
    return (
        <div>
            <Logout />
            <Name{...clinician} />
            <div>username: {clinician?.username}</div>
            <div>role: {clinician?.role}</div>
        </div>
    )
}

export default ClinicianInfo
