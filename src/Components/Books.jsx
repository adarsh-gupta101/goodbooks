import React from 'react'
import "./books.css"

function Books({book}) {
    return (
        <div>
            <div className="book__data">
            <img className="book__image"src={book.volumeInfo.imageLinks.smallThumbnail}/>

<div className="book__description">
    <h4>{book.volumeInfo.title} by <span>{book.volumeInfo.authors}</span></h4>
    <p>{book.volumeInfo.description}</p>
    
    </div>
            </div>
        </div>
    )
}

export default Books
