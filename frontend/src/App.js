//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Viewtodo from './Components/Viewtodo';
import Addtodo from './Components/Addtodo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/header' element={<Header/>} />
    <Route path='/viewtodo' element={<Viewtodo/>} />
    <Route path='/add' element={<Addtodo/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
