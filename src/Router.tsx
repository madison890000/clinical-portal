import { createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom';
import Login from './modules/Login';

const Router = createBrowserRouter(
    createRoutesFromElements([
        <>
            <Route path="/login" element={<Login />} />
        </>
    ]));
export default Router
