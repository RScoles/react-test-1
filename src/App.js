import { BrowserRouter, Routes, Route } from "react-router-dom"
import  LoginForm from "./pages/LoginForm"
import Pets from "./pages/Pets"
import Profile from "./pages/Profile"
import NoPage from "./pages/NoPage"

// Will have to use Profile Ids and Pets Ids in profile and pet Ids to deplay pets in Pets

export default function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route index element ={<LoginForm />} />
        <Route path="/home" element={<LoginForm />} />
        <Route path ="/profile" element={<Profile />} /> 
        <Route path ="/pets" element={<Pets />} />
        <Route path ="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}


