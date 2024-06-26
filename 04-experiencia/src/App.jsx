import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

// Import pages
import Dashboard from './pages/Dashboard';
import Programs from './pages/programs/Programs';
import ProgramsForm from './pages/forms/ProgramsForm';
import EditProgram from './pages/forms/EditProgram';
import Mentors from './pages/directories/Mentors';
import MentorProfile from './pages/directories/MentorProfile';
import MentorsForm from './pages/forms/MentorsForm';
import EditMentor from './pages/forms/EditMentor';
import Companies from './pages/directories/Companies';
import CompanyProfile from './pages/directories/CompanyProfile';
import CompaniesForm from './pages/forms/CompaniesForm';
import EditCompany from './pages/forms/EditCompany';
import Events from './pages/Events';
import EventsForm from './pages/forms/EventsForm';
import EditEvent from './pages/forms/EditEvent';
import Account from './pages/settings/Account';
import PageNotFound from './pages/utility/PageNotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';

// Protección de rutas
import PrivateRoute from './utils/PrivateRoute';

function App() {

  const location = useLocation();

  // cuando la ruta de la aplicación cambia, la ventana se desplaza inmediatamente hasta la parte superior sin ningún efecto de desplazamiento suave
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/programs" element={<PrivateRoute><Programs /></PrivateRoute>} />
        <Route path="/programs/create" element={<PrivateRoute><ProgramsForm /></PrivateRoute>} />
        <Route path="/programs/edit/:id" element={<PrivateRoute><EditProgram /></PrivateRoute>} />
        <Route path="/mentors" element={<PrivateRoute><Mentors /></PrivateRoute>} />
        <Route path="/mentor/profile/:mentorId" element={<PrivateRoute><MentorProfile /></PrivateRoute>} />
        <Route path="/mentors/create" element={<PrivateRoute><MentorsForm /></PrivateRoute>} />
        <Route path="/mentors/edit/:id" element={<PrivateRoute><EditMentor /></PrivateRoute>} />
        <Route path="/companies" element={<PrivateRoute><Companies /></PrivateRoute>} />
        <Route path="/company/profile/:companyId" element={<PrivateRoute><CompanyProfile /></PrivateRoute>} />
        <Route path="/companies/create" element={<PrivateRoute><CompaniesForm /></PrivateRoute>} />
        <Route path="/companies/edit/:id" element={<PrivateRoute><EditCompany /></PrivateRoute>} />
        <Route path="/events" element={<PrivateRoute><Events /></PrivateRoute>} />
        <Route path="/events/create" element={<PrivateRoute><EventsForm /></PrivateRoute>} />
        <Route path="/events/edit/:id" element={<PrivateRoute><EditEvent /></PrivateRoute>} />
        <Route path="/settings/account" element={<PrivateRoute><Account /></PrivateRoute>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;