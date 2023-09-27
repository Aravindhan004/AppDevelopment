import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image from '../images/componentIMG.jpg'

export default function Home() {
  // Sample quotes
  const quotes = [
    {
      text: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero",
    },
    {
      text: "You can never get a cup of tea large enough or a book long enough to suit me.",
      author: "C.S. Lewis",
    },
    {
      text: "There is no friend as loyal as a book.",
      author: "Ernest Hemingway",
    },
  ];

  // Sample book array
  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to Bookstagram!</h1>
        <h2 className="text-xl font-semibold mb-4">Quotes:</h2>
        <ul className="mb-4">
          {quotes.map((quote, index) => (
            <li key={index} className="mb-2">
              <blockquote className="italic">{quote.text}</blockquote>
              <p className="text-right">- {quote.author}</p>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-4">Featured Books:</h2>
        <ul className="mb-16">
          {books.map((book, index) => (
            <li key={index} className="mb-2">
              <img
          src={image}
          alt="Book of the Day"
          className="w-full max-w-md mx-auto rounded"
        />
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p className="text-sm text-gray-600">{book.genre}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

