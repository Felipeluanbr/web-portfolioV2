import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
      <h1>Oi</h1>
    </>
  );
}

export default App;
