import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Community() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-5">
        <h1 className="text-2xl font-bold mb-4 mt-24">Welcome to the Bookstagram Community</h1>
        <p className="mb-4">
          Bookstagram Community is a place where book lovers from around the world come together to share their passion for reading.
        </p>
        <h2 className="text-xl font-semibold mb-2">What You'll Find in Our Community:</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Engaging book discussions and reviews.
          </li>
          <li>
            Recommendations from fellow bookworms.
          </li>
          <li>
            Author interviews and Q&A sessions.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">How to Get Involved:</h2>
        <p className="mb-4">
          Joining our Bookstagram Community is easy. Simply create an account, start following your favorite readers and authors, and dive into the world of literature.
        </p>
        <h2 className="text-xl font-semibold mb-2">Stay Connected:</h2>
        <p className="mb-4">
          Follow us on social media to stay updated on the latest community events, reading challenges, and book-related news.
        </p>
        {/* Add more content as needed */}
      </div>
      <Footer />
    </div>
  );
}
