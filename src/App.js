import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appointment/Appoinment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import ResetPassword from './Pages/Login/ResetPassword';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/appoinment" element={<RequireAuth>
          <Appoinment />
        </RequireAuth>} />

        <Route path="dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route path="payment/:id" element={<RequireAuth>
            <Payment />
          </RequireAuth>} />

          <Route index element={<MyAppointment />} />
          <Route path='review' element={<MyReview />} />
          <Route path='users' element={<RequireAdmin>
            <Users />
          </RequireAdmin>} />
          <Route path='adddoctor' element={<RequireAdmin>
            <AddDoctor />
          </RequireAdmin>} />
          <Route path='manageDoctor' element={<RequireAdmin>
            <ManageDoctors />
          </RequireAdmin>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
