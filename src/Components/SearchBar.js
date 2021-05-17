import React, { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books";
import Button from "@material-ui/core/Button";
import image from "./Backgroundimage.jpg";
import "./search.css";
import { auth, provider } from "./firebase";
import { Link } from "react-router-dom";

function SearchBar() {
  const [search, setsearch] = useState();
  const [books, setbooks] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  async function fetchdata() {
    await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((data) => {
        setbooks(data.data.items);
        console.log(data.data.items);
      });
  }

  return (
    <div className="searchbar">
      <img className="background__image" src={image} />
      <img
        onClick={() => {
          auth.signOut().then(() => {
            localStorage.removeItem("user");
            setUser(null);
          });
        }}
        className="user__image"
        src={user?.photo}
      />
      <div className="input_box">
        <input
          className="inputbox"
          value={search}
          placeholder="Search a Book"
          onChange={(e) => setsearch(e.target.value)}
        ></input>
        <div className="buu">
          <Button onClick={fetchdata} variant="contained" color="secondary">
            Search
          </Button>
          <Link to="/new">
            {" "}
            <Button color="primary" variant="contained">
              Add or view Book by users.
            </Button>
          </Link>
        </div>
      </div>
      <div className="effect"></div>
      <div className="books">
        {books.map((book) => {
          return <Books book={book} />;
        })}
      </div>
    </div>
  );
}

export default SearchBar;
