import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Login from '../pages/Login';
import RootLayout from '../components/common/RootLayout';
import PropagatingErrorElement from '../components/common/PropagatingErrorElement';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <PropagatingErrorElement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/logout',
        element: <h1>this is logout route</h1>,
      },
    ],
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
]);
