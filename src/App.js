import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Route path='/trees' element={<Category category="tree"/>}/>
        <Route path='/shrubs' element={<Category category="shrub"/>}/>
        <Route path='/perennials' element={<Category category="perennial"/>}/>
        <Route path='/indoorplants' element={<Category category="indoorplant"/>}/>
        <Route path='/alltrees' element={<AllTrees/>}>
          <Route path=':treeId' element={<AllTrees/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
