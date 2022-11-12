import Name from '../components/Name';

const PatientDetail = ({ id }: { id: string }) => {
    return (
        <>
            <Name
                title="title" firstName={'firstName'} familyName={'familyName'}
            />
            <div>Sex: Male</div>
            <div>age: 18</div>
        </>
    )
}

export default PatientDetail
