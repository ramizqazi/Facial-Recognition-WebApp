import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import Welcome from '../containers/Welcome';
import AddUser from '../containers/AddUser';
import FaceVerification from '../containers/FaceVerification';

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/face-verification" element={<FaceVerification />} />
      </Routes>
    </Router>
  );
};

/* Export
============================================================================= */
export default AppNavigation;
