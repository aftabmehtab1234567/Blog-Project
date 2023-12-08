import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from "./component/account/Login";
import DataProvider from "./Context/Dataprovider";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  console.log('isAuthenticated', isAuthenticated);
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
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            />
          </Routes>
          {/* Render Home outside of Routes to always display it */}
          {isAuthenticated && <Home />}
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
