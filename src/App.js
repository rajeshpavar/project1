import AdminCategarios from"./Pages/admin/AdminCategarios"

import AdminMngOd from "./Pages/admin/AdminMngOd";
import AdminProduct from "./Pages/admin/AdminProduct";
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


function App() {
  return (
   
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<><Header/><Index/><Footer/></>}></Route>
      <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
      <Route path="/courses" element={<><Header/><Courses/><Footer/></>}></Route>
      <Route path="/ourTeam" element={<><Header/><Team/><Footer/></>}></Route>
      <Route path="/testimonial" element={<><Header/><Testomanial/><Footer/></>}></Route>
      <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
      <Route path="/join" element={<><Header/><Join/><Footer/></>}></Route>
      <Route path="/login" element={<><Header/><Login/><Footer/></>}></Route>
      <Route path="/notFound" element={<><Header/><Notfound/><Footer/></>}></Route>
      
   {/* admin page */}
    
    <Route path="/productInfo" element={<><Adminheader/><AdminProduct/><AdminFooter/></>}></Route>
    <Route path="/team" element={<><Adminheader/><AdminTeam/><AdminFooter/></>}></Route>
    <Route path="/getContact" element={<><Adminheader/><AdminCategarios/><AdminFooter/></>}></Route>
    <Route path="/getProduct" element={<><Adminheader/><AdminMngOd/><AdminFooter/></>}></Route>



    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
