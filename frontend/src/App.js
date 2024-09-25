import './App.css';
import Footer from './screens/Footer/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './screens/Register/Register';
import LandingPage from './screens/LandingPage/LandingPage'
import Login from './screens/Login/Login';
import MainLandingPage from './screens/LandingPage/MainLandingPage'
import Profile from './screens/Profile/Profile';

const App = () =>{
  return (
    <>
    
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/Regiser" Component={Register} />
            <Route path="/Login" Component={Login} />
            <Route path="/MainLandingPage" Component={MainLandingPage} />
            <Route path="/Profile" Component={Profile} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
