import {Routes,Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import SingUp from './pages/SingUp';
import About from './pages/About';
import Profile from './pages/Profile';
import SingIn from './pages/SingIn';
import Header from './components/Header';


export default function App(){
  return (
  <BrowserRouter >
<Header/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/sign-in" element={<SingIn/>} />
  <Route path="/sign-up" element={<SingUp/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/profile" element={<Profile/>} />
</Routes>
    </BrowserRouter>
  );
  
}