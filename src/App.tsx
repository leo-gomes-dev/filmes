import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRoutes from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme="dark" />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
