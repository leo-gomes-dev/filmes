import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRoutes from "./routes";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme="dark" />
      <AppRoutes />
    </>
  );
}

export default App;
