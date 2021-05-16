import React, { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books";
import Button from "@material-ui/core/Button";
import image from "./Backgroundimage.jpg";
import "./search.css";

function SearchBar() {
  const [search, setsearch] = useState();
  const [books, setbooks] = useState([]);

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
      <div className="input_box">
        <input
          className="inputbox"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        ></input>

        <Button onClick={fetchdata} variant="contained" color="secondary">
          Search
        </Button>
      </div>
      <div className="effect"></div>

      {books.map((book) => {
        return <Books book={book} />;
      })}
    </div>
  );
}

export default SearchBar;
