import './App.css'
import Home from './pages/home/Home';
import RootLayout from './pages/Root';
import Cart from './pages/card/Cart'
import Watches from './pages/catalogue/Watches'
import Services from './pages/servicesPage/Services'
import Profile from './pages/forms/Profile'
import Maison from './pages/Maison'
import Magazine from './pages/magazine/Magazine'
import Register from './pages/forms/Register'
import ProfileExpanded from './pages/profileExpanded/ProfileExpanded';

import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { AuthProvider } from './contexts/AuthContext';




function App() {
  const router = createBrowserRouter([
    {
    element: <RootLayout></RootLayout>,
    children: [
      {path: '/', element: <Home></Home>},
      {path: '/watches', element: <Watches></Watches>},
      {path: '/magazine', element: <Magazine></Magazine>},
      {path: '/maison', element: <Maison></Maison>},
      {path: '/services', element: <Services></Services>},

      {path: '/cart', element: <Cart></Cart>},
      {path: '/profile', element: <Profile></Profile>},
      {path: '/profileExpanded', element: <ProfileExpanded></ProfileExpanded>},
      {path: '/register', element: <Register></Register>},
      
    ]
  }
]);
  return (
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>      
  )
}

export default App
