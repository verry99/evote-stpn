import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import OtpVerify from '../pages/OtpVerify';
import Regist from '../pages/Register';
import ForgotPassword from '../pages/Forgot';
import SetNewPass from '../pages/SetNewPass';
import RegistSuccess from '../pages/RegistSuccess';

export default function Router(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/regist" element={<Regist />} />
      <Route path="/regist-success" element={<RegistSuccess />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verify/:email" element={<OtpVerify />} />
      <Route path="/set-new-password" element={<SetNewPass />} />
    </Routes>
  );
}