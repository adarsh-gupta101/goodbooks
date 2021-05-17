import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import db from "./Components/firebase";
import "./new.css";

function Newbook() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [data, setdata] = useState([]);
  const [bookname, setbookname] = useState([]);
  const [bookdescription, setbookdescription] = useState([]);
  const [bookauthor, setbookauthor] = useState([]);
  const [bookurl, setbookurl] = useState([]);

  const sendmessage = () => {
    let payload = {
      bookname: bookname,
      bookdescription: bookdescription,
      bookauthor: bookauthor,
      bookurl: bookurl,
    };
    db.collection("rooms").doc("books").collection("book").add(payload);
    alert("OK DONE");
  };
  useEffect(() => {
    db.collection("rooms")
      .doc("books")
      .collection("book")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setdata(messages);
      });
  }, []);
  return (
    <div className="Apx" style={{ color: "white" }}>
      <Link to="/">
        <Button color="secondary" variant="contained" id="myid">
          Home
        </Button>
      </Link>
      <img
        src="https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg"
        className="Apex"
      />
      <div className="stic">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            id="inputis"
            placeholder="Book name....."
            onChange={(e) => {
              setbookname(e.target.value);
            }}
            value={bookname}
          ></input>
          <input
            id="inputis"
            placeholder="Book author...."
            onChange={(e) => {
              setbookauthor(e.target.value);
            }}
            value={bookauthor}
          ></input>
          <input
            placeholder="Book description..."
            id="inputis"
            onChange={(e) => {
              setbookdescription(e.target.value);
            }}
            value={bookdescription}
          ></input>
          <input
            placeholder="Book Image URL...."
            id="inputis"
            onChange={(e) => {
              setbookurl(e.target.value);
            }}
            value={bookurl}
          ></input>
          <Button color="secondary" variant="contained" onClick={sendmessage}>
            Save
          </Button>
        </form>
      </div>
      {data?.map((datas) => {
        return (
          <div className="lastbook">
            <img width="250px" src={datas.bookurl} alt="image error" />
            <span id="hi">
              <h5>{datas.bookname}</h5>
              <p>{datas.bookdescription}</p>
              <Button color="secondary">{datas.bookauthor}</Button>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Newbook;
