import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Login from './pages/Login';
import ClinicianDetail from './pages/ClinicianDetail';
import { ROUTES } from './constants';

const Router = createHashRouter(
    createRoutesFromElements([
        <>
            <Route path={ROUTES.Root} element={<Login />} />
            <Route path={ROUTES.Login} element={<Login />} />
            <Route path={ROUTES.ClinicianDetail} element={<ClinicianDetail />} />
        </>
    ])
);
export default Router;
