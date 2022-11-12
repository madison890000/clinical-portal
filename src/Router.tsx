import { createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom';
import Login from './modules/Login';
import ClinicianDetail from './modules/ClinicianDetail';

const Router = createBrowserRouter(
    createRoutesFromElements([
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/clinician-detail" element={<ClinicianDetail />} />
        </>
    ]));
export default Router
