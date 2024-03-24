import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Index';
import Login from '../pages/login/Index';
import SignUp from '../pages/signup/Index';

const RouteHandler = () => {
  return ( 
    <>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route  path="/" element={<Home />}/>
      </Routes>
    </>
  );
}
 
export default RouteHandler;