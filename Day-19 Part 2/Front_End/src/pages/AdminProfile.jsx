import React from 'react'
import Navbar from '../components/Navbar'
import store from '../features/storage'
import Footer from '../components/Footer';
import AdminNavbar from '../AdminComponents/AdminNavbar';


export default function AdminProfile() {
    const user = store.getState().admin.value  

  return (
    <div>
        <AdminNavbar />
        <div className='text-3xl font-extrabold mb-1 py-2 mt-24'>
          Welcome Back!!
        </div>
        <h2>{user.email}</h2>
        <Footer />
    </div>
  )
}
