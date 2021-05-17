import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import "./books.css"


function Books({book}) {
    const [show,setshow]=useState(false)
    const [data,setdata]=useState("Add a review")
    const mufunc=(e)=>{
        e.preventDefault()
        setdata()

    }
    function truncate (str , n) {
        return str?.length > n ? str.substr(0, n-1) + "......" : str;
        }
    return (
        <div className="b">
            <div className="book__data">
            <img className="book__image"src={book.volumeInfo.imageLinks.smallThumbnail} height="200px"/>

<div className="book__description">
    <h4>{book.volumeInfo.title} by <span>{book.volumeInfo.authors}</span></h4>
    <p> { truncate (book.volumeInfo.description , 150)}</p>
    <Button variant="contained" color="secondary"> year::{book.volumeInfo.publishedDate}</Button>
    <Button variant="contained" color="primary" href="#contained-buttons">genre::{book.volumeInfo.categories}</Button>
    <a href={book.volumeInfo.previewLink} style={{"text-decoration":"none"}}><Button variant="outlined" color="secondary">
  Buy Now
</Button></a>    <form onSubmit={mufunc} className="form" noValidate autoComplete="off">
    {data?<p severity="success">{data}</p>:<></>
}

<TextField onChange={(e)=>{setdata(e.target.value)}} id="outlined-basic" label={data} variant="outlined" />
<Button type="submit" onSubmit={(e)=>{
    e.preventDefault()
    
}}>Send</Button>
</form>
    </div>



            </div>
        </div>
    )
}

export default Books
