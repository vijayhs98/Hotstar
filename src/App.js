import './App.css';
import Navbar from './navbar';
import Home from './home.js';
import Favourites from './favourites';
import Footer from './footer';
import Addfav from './addfav';
// import State from './state';
import About from './about';

import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  let title ="Favourite Movies and Tv Shows"
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favourites' element={<Favourites data={title}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/addfav' element={<Addfav/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    {/* <State/> */}

    </div>
  );
}
export default App;
