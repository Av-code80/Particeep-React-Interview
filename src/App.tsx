import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import HomePages from "./pages/HomePages";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <HomePages />
      <ToastContainer />
    </>
  );

}

export default App;
