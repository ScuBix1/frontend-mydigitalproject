import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './layouts/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import EmailVerification from './pages/EmailVerification/EmailVerification';
import Loading from './pages/Loading/Loading';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Template from './template/Template';

function App() {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route path='/' element={<Loading />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/email-verification' element={<EmailVerification />} />
        <Route path={'/tutor'} element={<PrivateRoute />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
