import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import List from './Component/List'
import Favourites from './Component/Favourites';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner/><List /></>}/>
          <Route path="/fav" element={<Favourites />}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
