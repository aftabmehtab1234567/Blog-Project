import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from "./component/account/Login";
import DataProvider from "./Context/Dataprovider";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};

function App() {
  const [isAuthenticated, setIsUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: "64px" }}>
          <Routes>
            <Route
              path="/login"
              element={<Login isUserAuthenticated={setIsUserAuthenticated} />}
            />
            <Route
              path="/home"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
