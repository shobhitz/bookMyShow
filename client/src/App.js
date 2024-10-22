import './App.css';
import ProtectedRoute from './components/protectedRoute';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Registration from './pages/registration/registration';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
