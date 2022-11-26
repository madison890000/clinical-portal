import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router';
import Router from './Router';
import { AppContextContainer } from './contexts/AppContext';
import './modules/Notification';
import './utils/initialMockFetch';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <AppContextContainer>
        <RouterProvider router={Router} />
    </AppContextContainer>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
