import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Favorites from './pages/favorites';
import Layout from './pages/layout/layout';
import SpeciaLists from './pages/home';
import UserProfile from './pages/profile';
import Specialist from './pages/specialist';
import Info from './pages/info/info';
import { reduxApp } from './redux-app';
import { Provider } from 'react-redux'
import Album from './pages/album';
import Sheduler from './pages/sheduler';
import Services from './pages/sheduler/services';
import Calendar from './pages/sheduler/calendar';
import Confirm from './pages/sheduler/confirm';
import Index from './pages/cinfiguration-account';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <SpeciaLists />,
      },
      {
        index: true,
        path: "/config",
        element: <Index />,
      },
      {
        path: "/:id",
        element: <Specialist />,
        children: [
          {
            path: 'info',
            element: <Info />
          },
          {
            path: 'album',
            element: <Album />
          },
          {
            path: 'sheduler',
            element: <Sheduler />,
            children:[
              {
                path: 'services',
                element: <Services />
              },
              {
                path: 'calendar',
                element: <Calendar />
              },
              {
                path: 'confirm',
                element: <Confirm />
              },

            ]
          }
        ]
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={reduxApp}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
