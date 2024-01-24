import './App.css';
import {Routes, Route} from "react-router-dom"
import Loader from './Loader/Loader';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/Auth/ResetPassword/ResetPassword';
import OtpAccessCode from './Pages/Auth/OtpAccessCode/OtpAccessCode';
import Verify from './Pages/Auth/Verify/Verify';
import Navbar from "./Pages/HomePage/Navbar/Navbar";
import useLocalStorage from "use-local-storage";


function App() {
  const [myTheme, setMyTheme] = useLocalStorage("theme" ? "dark" : "light");
  

  const switchTheme = () => {
    const newTheme = myTheme === "light" ? "dark" : "light";
    setMyTheme(newTheme);
  };
  return (
    <div className="App" data-theme={myTheme}>
            <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register /> }/>
        <Route path="/reset" element={ <ForgotPassword/>}/>
        <Route path="/reset-password" element={ <ResetPassword/> }/>
        <Route path="/login-with-code/:email" element={ <OtpAccessCode/> }/>
        <Route path="/verify" element={ <Verify/> }/>
      </Routes>
      <Loader/>
    </div>
  );
}

export default App;
