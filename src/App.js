import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Category from './Pages/Category';
import Cart from './Pages/Cart';
import AllTrees from './Pages/AllTrees';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Category' element={<Category/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
        <Route path='/Indoorplants' element={<Category category='Indoorplants'/>}/>
        <Route path='/Trees' element={<Category category='Trees'/>}/>
        <Route path='/Shrubs' element={<Category category='Shrubs'/>}/>
        <Route path='/Perennials' element={<Category category='Perennials'/>}/>
        <Route path='/AllTrees' element={<AllTrees/>}>
          <Route path=':productId' element={<AllTrees/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
