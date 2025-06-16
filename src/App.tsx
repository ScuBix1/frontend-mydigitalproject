import { Route, Routes } from 'react-router-dom';
import SubscriptionStudent from './components/Subscription/Subscription';
import PrivateRoute from './layouts/PrivateRoute/PrivateRoute';
import EmailVerification from './pages/EmailVerification/EmailVerification';
import Loading from './pages/Loading/Loading';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import GameViewer from './pages/Student/GameViewer/GameViewer';
import StudentDashboard from './pages/Student/StudentDashboard/StudentDashboard';
import Victory from './pages/Student/Victory/Victory';
import AddStudent from './pages/Tutor/AddStudent/AddStudent';
import AllStudents from './pages/Tutor/AllStudents/AllStudents';
import Check from './pages/Tutor/Check/Check';
import Dashboard from './pages/Tutor/Dashboard/Dashboard';
import StudentProfile from './pages/Tutor/StudentProfile/StudentProfile';
import Subscription from './pages/Tutor/Subscription/Subscription';
import TutorProfile from './pages/Tutor/TutorProfile/TutorProfile';
import Template from './template/Template';

function App() {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route path='/' element={<Loading />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/email-verification' element={<EmailVerification />} />
      </Route>

      <Route path='/student' element={<PrivateRoute />}>
        <Route path='dashboard' element={<StudentDashboard />} />
        <Route path='game/:id' element={<GameViewer />} />
        <Route path='victory/:id' element={<Victory />} />
        <Route path='subscription' element={<SubscriptionStudent />} />
      </Route>

      <Route path='/tutor' element={<PrivateRoute />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='add-student' element={<AddStudent />} />
        <Route path='all-students' element={<AllStudents />} />
        <Route path='profile' element={<TutorProfile />} />
        <Route path='student/:id' element={<StudentProfile />} />
        <Route path='subscription' element={<Subscription />} />
        <Route element={<Template />}>
          <Route path='check' element={<Check />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
