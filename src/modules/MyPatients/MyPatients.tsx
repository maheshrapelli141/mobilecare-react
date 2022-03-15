import './style.css'
import DefaultLayout from "layout/DefaultLayout"
import PatientsList from "./PatientsList"
import SearchPatientForm from "./SearchPatientForm"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadPatients } from './myPatientsSlice'

export const MyPatients = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPatients());
    },[]);
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