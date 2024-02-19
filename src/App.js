import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/sharedLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import SharedProductLayout from "./pages/sharedProductLayout";
import SingleProduct from "./pages/singleProduct";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Error from "./pages/error";
import ProtectedRoute from "./pages/protectedRoute"; 

function App() {

  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SharedLayout/>} >
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />

          <Route path="products" element={<SharedProductLayout/>}>
            <Route index element={<Products/>} />
            {/* Colon(:) are used in case of dynamic route */}
            <Route path=":productId" element={<SingleProduct/>} />
          </Route>

          <Route path="login" element={<Login setUser={setUser} />} />
            <Route 
              path="dashboard" 
              element={
              <ProtectedRoute user={user} >
                <Dashboard user={user} />
              </ProtectedRoute>} 
            />
            <Route path="*" element={<Error/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
