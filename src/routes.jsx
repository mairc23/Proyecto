import { Route, Routes } from 'react-router-dom'
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Menu/>}>
        <Route path='/' element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
