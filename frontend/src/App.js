//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Viewtodo from './Components/Viewtodo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/header' element={<Header/>} />
    <Route path='/viewtodo' element={<Viewtodo/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
