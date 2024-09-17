import { useEffect, useState } from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LandingPage from './pages/LandingPage'
import ContactUsPage from './pages/ContactUsPage'
import ProjectsPage from './pages/ProjectsPage'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Route>
    ));

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
