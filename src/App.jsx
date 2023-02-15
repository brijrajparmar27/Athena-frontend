import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import useMailContext from "./Hooks/Context/useMailContext";
import Home from "./Pages/Home/Home";
import Records from "./Pages/Records/Records";

function App() {
  const { mail } = useMailContext();
  useEffect(() => {
    console.log(mail);
  }, [mail]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={mail ? <Navigate to="/records" /> : <Home />}
        />
        <Route
          path="/records"
          element={mail ? <Records /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
