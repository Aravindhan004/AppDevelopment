import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Faq() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4 mb-16">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">What is Bookstagram?</h2>
            <p>Bookstagram is a social media platform for book lovers, where users can discover, review, and discuss books.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How do I create a Bookstagram account?</h2>
            <p>To create a Bookstagram account, go to the website and click on the "Sign up" button. Follow the prompts to set up your profile.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">Is Bookstagram free to use?</h2>
            <p>Yes, Bookstagram is completely free to use. You can create an account and access most features without any cost.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">Can I connect with other readers on Bookstagram?</h2>
            <p>Yes, one of the main features of Bookstagram is the ability to connect with other readers, follow their reviews, and join discussions.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How can I add books to my Bookstagram shelves?</h2>
            <p>You can add books to your Bookstagram shelves by searching for a book and clicking the "Want to Read," "Currently Reading," or "Read" button on the book's page.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">Are book recommendations personalized on Bookstagram?</h2>
            <p>Yes, Bookstagram offers personalized book recommendations based on your reading history and preferences.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">Can I write book reviews on Bookstagram?</h2>
            <p>Absolutely! You can write and publish book reviews on Bookstagram, and your reviews will be visible to other users.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">Is there a mobile app for Bookstagram?</h2>
            <p>Yes, Bookstagram has a mobile app available for both iOS and Android devices, allowing you to access the platform on the go.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">Are there reading challenges on Bookstagram?</h2>
            <p>Yes, Bookstagram hosts an annual Reading Challenge where you can set a goal for the number of books you want to read in a year.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How can I report inappropriate content on Bookstagram?</h2>
            <p>If you come across inappropriate content, you can report it to Bookstagram by using the reporting feature on the platform.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
