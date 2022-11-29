
// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './Component/Login';
import "./App.css";
import { MyDevice } from "./Component/MyDevice";
import { ProductList } from "./Component/ProductList";
import "./App.css"


function App() {
  return (
    
       <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/MyDevice" element={<MyDevice/>}></Route>
        <Route exact path="/ProductList" element={<ProductList/>}></Route>
        
      </Routes>
    </BrowserRouter>
     
   
  );
}

export default App;
