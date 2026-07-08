import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="min-h-screen bg-black min-h-screen text-white flex flex-col items-center justify-between "
    >
      <Navbar className="" />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
