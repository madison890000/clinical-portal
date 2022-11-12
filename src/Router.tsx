import { createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom';
import Login from './modules/Login';

const Router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<div></div>}>
            <Route path="login" element={<Login />} />
        </Route>
    ]));
export default Router
