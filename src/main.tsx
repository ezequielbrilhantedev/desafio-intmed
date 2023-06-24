import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import NewQuery from './routes/NewQuery';
import LoginRoute from './routes/Login.tsx';
import Create from './routes/Create.tsx';
import HomeRoute from './routes/HomeRoute.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LoginRoute />,
      },
      {
        path: 'criar-conta',
        element: <Create />,
      },
      {
        path: 'home',
        element: <HomeRoute />,
      },
      {
        path: 'nova-consulta',
        element: <NewQuery />,
      },
    ],
  },
]);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
