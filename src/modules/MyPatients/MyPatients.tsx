import './style.css'
import DefaultLayout from "layout/DefaultLayout"
import PatientsList from "./PatientsList"
import SearchPatientForm from "./SearchPatientForm"

export const MyPatients = () => {
    return <DefaultLayout>
        <div className="container">
            <div>
                <h3>Search Patient</h3>
                <SearchPatientForm />
            </div>
            <PatientsList />
        </div>
    </DefaultLayout>
}