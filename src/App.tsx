import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/Register.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  );
}

export default App;
