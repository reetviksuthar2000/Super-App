import Signup from "./pages/Signuppage/Signup"
import Category from "../src/pages/Category/Category"
import Dashboard from "./pages/Dashboardpage/Dashboard";
import Movies  from "./pages/Moviespage/Movies";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';


function App() {
  return (
   
   <Router>
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/category" element={<Category/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/movies" element={<Movies/>}/>
     
      
    </Routes>
   </Router>
   
   
  );
}

export default App;
