import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from "./component/account/Login";
import DataProvider from "./Context/Dataprovider";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Createpost from "./component/Createpost/Createpost";

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
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/home"
              element={isAuthenticated ? <Home /> : null}
            />
            <Route
              path="/create"
              element={<Createpost isUserAuthenticated={setIsUserAuthenticated} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
