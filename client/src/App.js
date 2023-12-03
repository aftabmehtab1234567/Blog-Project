import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "./component/account/Login";
import DataProvider from "./Context/Dataprovider";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";

const PrivateRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? <><Header />{element}</> : <Navigate replace to="/login" />;
};

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        
        <div style={{ marginTop: "64px" }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
