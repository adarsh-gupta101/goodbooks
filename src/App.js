import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Login from "./Login.js";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <div className="App">
      {!user ? <Login setUser={setUser} /> : <SearchBar />}
    </div>
  );
}

export default App;
