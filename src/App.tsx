import { Route, Routes } from 'react-router-dom';
import Template from './components/Template/Template';
import Loading from './pages/Loading/Loading';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route path='/' element={<Loading />} />
        <Route path='/signup' element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
