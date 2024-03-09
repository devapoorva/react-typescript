import React from 'react';  
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/Home';
import AboutPage from './pages/about/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  }
]);


function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App;
