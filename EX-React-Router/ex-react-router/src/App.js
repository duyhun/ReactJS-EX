import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Ex01/Login';
import Home from './components/Ex01/Home';
// import Category from './components/Practice3/Category';
// import Product from './components/Practice3/Product';
// import Category from './components/Practice1/Category';
// import Product from './components/Practice1/Product';


function App() {
  return (
    //Practice 1
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Category/>}/>
    //     <Route path="/product/:categoryId" element={<Product />} />
    //   </Routes>
    // </BrowserRouter>
    //Practice 2
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Category />}></Route>
    //     <Route path='/product' element={<Product />}></Route>
    //   </Routes>
    // </BrowserRouter>
    //Ex01 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
