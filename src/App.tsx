import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col gap-2">
      <Navbar />
      <div className="w-100 flex h-full flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
