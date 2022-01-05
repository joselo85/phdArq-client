import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectDetails from '../pages/ProjectDetails'
import Contact from '../pages/Contact'

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='proyectos'>
        <Route index element={<ProjectsPage />} />
        <Route path=':id' element={<ProjectDetails />} />
      </Route>
      <Route path='contacto'>
        <Route index element={<Contact />} />
      </Route>
    </Route>
  </Routes>
)

export default AppRoutes
