import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Login from './pages/Login';
import ClinicianDetail from './pages/ClinicianDetail';

const Router = createBrowserRouter(
    createRoutesFromElements([
        <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/clinician-detail" element={<ClinicianDetail />} />
        </>
    ])
);
export default Router;
