import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import UserTopNavBar from './Components/Users/UserTopNavBar';
import UserTypeSelection from './Components/Users/UserTypeSelection';
import UserFooter from './Components/Users/UserFooter';
import SearchContainer from './Components/Users/SearchContainer';
import AdminSideNavbar from './Components/Admin/AdminSideNavbar';
import AdminTopNavbar from './Components/Admin/AdminTopNavbar';
import AdminFooter from './Components/Admin/AdminFooter';
import AdminDashboard from './Components/Admin/AdminDashboard'
import AdminFileUpload from './Components/Admin/AdminFileUpload'
import AdminAddSubAdmin from './Components/Admin/AdminAddSubAdmin'
import Dashboard from './Components/Users/Dashboard';
import AdminProfile from './Components/Admin/AdminProfile';
import AdminAirportList from './Components/Admin/AdminAirportList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={[<><UserTopNavBar /><div className='user_body'><UserTypeSelection /><SearchContainer /><Dashboard /></div><UserFooter /></>]} />
        <Route path='/admin' element={[<> <AdminSideNavbar /><AdminTopNavbar /><div className='admin_body'><AdminDashboard /></div><AdminFooter /> </>]} />
        <Route path='/admin/fileupload' element={[<> <AdminSideNavbar /><AdminTopNavbar /><div className='admin_body'><AdminFileUpload /></div><AdminFooter /> </>]} />
        <Route path='/admin/addsubadmin' element={[<> <AdminSideNavbar /><AdminTopNavbar /><div className='admin_body'><AdminAddSubAdmin /></div><AdminFooter /> </>]} />
        <Route path='/admin/profile' element={[<> <AdminSideNavbar /><AdminTopNavbar /><div className='admin_body'><AdminProfile /></div><AdminFooter /> </>]} />
        <Route path='/admin/airportlist' element={[<> <AdminSideNavbar /><AdminTopNavbar /><div className='admin_body'><AdminAirportList /></div><AdminFooter /> </>]} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
