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
            <>
                (
                <div>{preferredName}</div>
                )
            </>
        )
    } else {
        prefixName = (
            <>
                <div>{firstName}</div>
            </>
        )
    }
    return (
        <div style={{ display: 'flex' }}>
            <div>{title}</div>
            {prefixName}
            <div>{middleName}</div>
            <div>{familyName}</div>
            <div>{suffix}</div>
        </div>
    )
}

export default Name
