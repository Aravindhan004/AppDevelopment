import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./styles/books.css"
import booksData from '../Data/books'

export default function Books() {
    return (
        <div>
            <Navbar />
            <div className="books-wrapper mt-24">
                <div className="books-header-div">
                    <h2>Virtual Bookshelf</h2>
                </div>
                <div className="books-body">
                    {
                        booksData.map((elem) => {
                            return (
                                <>
                                    <BookContainer author={elem.author} genre={elem.genre} imgLink={elem.imgLink} name={elem.name} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
function BookContainer({ name, imgLink, author, genre }) {
    return (
        <>

            <div className="book-container-wrapper">
                <div className="books-img-wrapper">
                    <img src={imgLink} alt="" className="books-img" />
                </div>
                <div className="books-bd-wrapper">
                    <h2 className="book-name">Book Name : {name}</h2>
                    <h3 className="book-author">Author : {author}</h3>
                    <p>Genre : {genre}</p>
                </div>
            </div>
        </>
    )
}