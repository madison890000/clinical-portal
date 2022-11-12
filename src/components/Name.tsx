import { IPerson } from '../types';

export const Name = ({
                         title,
                         firstName,
                         preferredName,
                         middleName,
                         familyName,
                         suffix
                     }: IPerson) => {

    let prefixName: React.ReactNode;
    if (preferredName) {
        prefixName = (
            <>(
                <div style={{ margin: '0 5px' }}>{preferredName}</div>
                )</>
        )
    } else {
        prefixName = (
            <>
                <div style={{ margin: '0 5px' }}>{firstName}</div>
            </>
        )
    }
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '5px' }}>{title}</div>
            {prefixName}
            <div style={{ margin: '0 5px' }}>{middleName}</div>
            <div style={{ margin: '0 5px' }}>{familyName}</div>
            <div style={{ margin: '0 5px' }}>{suffix}</div>
        </div>
    )
}

export default Name
