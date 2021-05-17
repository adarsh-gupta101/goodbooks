import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Login from "./Login.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Newbook from "./Newbook";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/new">
            <Newbook />
          </Route>

          <Route path="/">
            {!user ? <Login setUser={setUser} /> : <SearchBar />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
