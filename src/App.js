import AdminCategarios from"./Pages/admin/AdminCategarios"

import AdminMngOd from "./Pages/admin/AdminMngOd";
import AdminProduct from "./Pages/admin/AdminProduct";
import AdminManager from "./Pages/admin/AdminManager";
import AdminTeam from "./Pages/admin/AdminTeam";
import AdminFooter from "./Pages/admin/Components/AdminFooter";
import Adminheader from "./Pages/admin/Components/Adminheader";
import About from "./Pages/website/About";
import Footer from "./Pages/website/Components/Footer";
import Header from "./Pages/website/Components/Header";
import Testomanial from "./Pages/website/Components/Testomanial";
import Contact from "./Pages/website/Contact";
import Courses from "./Pages/website/Courses";
import Index from "./Pages/website/Index";
import Join from "./Pages/website/Join";
import Login from "./Pages/website/Login";
import Notfound from "./Pages/website/Notfound";
import Team from "./Pages/website/Team";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ManageCourse from "./Pages/admin/ManageCourse";
import ManageCategarios from "./Pages/admin/ManageCategarios";
import ManageTeam from "./Pages/admin/ManageTeam";
import Admin from "./Pages/admin/Admin";
import ManageAdmin from "./Pages/admin/ManageAdmin";
import MyAccount from "./Pages/website/MyAccount";
import { RequireAdmin, RequireAuth, GuestOnly, BlockAdminHome } from "./Pages/website/ProtectedRoute";
import AdminAccount from "./Pages/website/AdminAccount";


function App() {
  return (
   
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<><Header/><BlockAdminHome><Index/></BlockAdminHome><Footer/></>}></Route>
      <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
      <Route path="/courses" element={<><Header/><Courses/><Footer/></>}></Route>
      <Route path="/ourTeam" element={<><Header/><Team/><Footer/></>}></Route>
      <Route path="/testimonial" element={<><Header/><Testomanial/><Footer/></>}></Route>
      <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
      <Route path="/join" element={<><Header/><GuestOnly><Join/></GuestOnly><Footer/></>}></Route>
      <Route path="/login" element={<><Header/><GuestOnly><Login/></GuestOnly><Footer/></>}></Route>
      <Route path="/my-account" element={<><Header/><RequireAuth><MyAccount/></RequireAuth><Footer/></>}></Route>
      <Route path="/admin-account" element={<><Header/><RequireAdmin><AdminAccount/></RequireAdmin><Footer/></>}></Route>
      <Route path="/notFound" element={<><Header/><Notfound/><Footer/></>}></Route>
     
      
     {/* admin page */}
    
    <Route path="/productInfo" element={<><RequireAdmin><Adminheader/></RequireAdmin><RequireAdmin><AdminProduct/></RequireAdmin><RequireAdmin><AdminFooter/></RequireAdmin></>}></Route>
    <Route path="/team" element={<><RequireAdmin><Adminheader/></RequireAdmin><RequireAdmin><AdminTeam/></RequireAdmin><RequireAdmin><AdminFooter/></RequireAdmin></>}></Route>
    <Route path="/getContact" element={<><RequireAdmin><Adminheader/></RequireAdmin><RequireAdmin><AdminCategarios/></RequireAdmin><RequireAdmin><AdminFooter/></RequireAdmin></>}></Route>
    <Route path="/getProduct" element={<><RequireAdmin><Adminheader/></RequireAdmin><RequireAdmin><AdminMngOd/></RequireAdmin><RequireAdmin><AdminFooter/></RequireAdmin></>}></Route>
    
    <Route path="/manageCourse" element={<><RequireAdmin><Adminheader/></RequireAdmin><RequireAdmin><ManageCourse/></RequireAdmin><RequireAdmin><AdminFooter/></RequireAdmin></>}></Route>
    <Route path="/manageCategarios" element={<><RequireAdmin><Adminheader/></RequireAdmin><RequireAdmin><ManageCategarios/></RequireAdmin><RequireAdmin><AdminFooter/></RequireAdmin></>}></Route>
    <Route path="/manageInstructor" element={<><RequireAdmin><Adminheader/></RequireAdmin><RequireAdmin><ManageTeam/></RequireAdmin><RequireAdmin><AdminFooter/></RequireAdmin></>}></Route>
     <Route path="/manageAdmin" element={<><RequireAdmin><Adminheader/></RequireAdmin><RequireAdmin><ManageAdmin/></RequireAdmin><RequireAdmin><AdminFooter/></RequireAdmin></>}></Route>
 
     <Route path="/admin" element={<><RequireAdmin><Adminheader/></RequireAdmin><RequireAdmin><Admin/></RequireAdmin><RequireAdmin><AdminFooter/></RequireAdmin></>}></Route>





    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
