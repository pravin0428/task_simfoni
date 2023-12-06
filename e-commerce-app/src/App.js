import "./App.css";
import Navbar from "./Components/Common/Navbar";
import AllRoutes from "./Pages/AllRoutes";

import HomePage from "./Pages/HomePage";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
