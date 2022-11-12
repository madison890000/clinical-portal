import Name from '../components/Name';
import { IClinician } from '../types';

const ClinicianInfo = ({...clinician}: IClinician) => {
    return (
        <div>
            <Name{...clinician} />
            <div>username: {clinician?.username}</div>
            <div>role: {clinician?.role}</div>
        </div>
    )
}

export default ClinicianInfo
