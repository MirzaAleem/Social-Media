import React, { Suspense, lazy, useContext } from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Navigate
} from "react-router-dom";
import { AuthContext } from './Context/AuthContext';

const Home = lazy(() => import('./pages/home/Home'));
const Login = lazy(() => import('./pages/login/Login'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const Register = lazy(() => import('./pages/register/Register'));

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

function Root() {
  const Context = useContext(AuthContext);

  return (
    <Suspense fallback={<div>Loading...</div>}>

      <Routes>
        <Route path="/" element={Context.user ? <Home /> : <Navigate to="/register" replace={true}/>} />
          <Route path="/login" element={Context.user ? <Navigate to="/" replace={true}/> : <Login />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/register" element={Context.user ? <Navigate to="/" replace={true}/> : <Register />} />
      </Routes>

    </Suspense>
  );
}

// RouterProvider added
export default function App() {
  return <RouterProvider router={router} />;
}
