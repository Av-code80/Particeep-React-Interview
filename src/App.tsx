import { ToastContainer } from "react-toastify";
import HomePages from "./pages/HomePages";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <HomePages />
      <ToastContainer />
    </>
  );
}

export default App;
