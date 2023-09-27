import React from 'react'
import Navbar from '../components/Navbar'
import store from '../features/storage'
import Footer from '../components/Footer';


export default function Profile() {
    const user = store.getState().admin.value  

  return (
    <div>
        <Navbar />
        <div className='text-3xl font-extrabold mb-1 py-2 mt-24'>
          Welcome Back!!
        </div>
        <h2>{user.email}</h2>
        <Footer />
    </div>
  )
}
