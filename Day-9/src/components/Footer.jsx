import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';


function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-0.01 text-center">
  <div className="container mx-auto">
    <div className="text-lg">
      <p className="mb-4">
      <FontAwesomeIcon icon={faCopyright} />2023, Bookstagram, Inc.</p>
    </div>
    <div className="flex flex-wrap items-center justify-center">
  <p className="mb-4 mr-4">Quickies : 
    <Link to="/policy" className="text-gray-300 hover:text-white hover:underline mx-2">
      Privacy Policy
    </Link>
    <Link to="/faq" className="text-gray-300 hover:text-white hover:underline mx-2">
      FAQ's
    </Link>
    <Link to='/terms' className="text-gray-300 hover:text-white hover:underline mx-2">
      Terms and Conditions
    </Link>
  </p>
  <p className='mb-4'>Social Media :
    <a href="https://www.facebook.com/" className="text-gray-300 hover:text-white hover:underline mx-2">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="https://www.instagram.com/" className="text-gray-300 hover:text-white hover:underline mx-2">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://www.twitter.com/" className="text-gray-300 hover:text-white hover:underline mx-2">
      <FontAwesomeIcon icon={faTwitter}/>
    </a>
    <a href="https://www.linkedin.com/" className="text-gray-300 hover:text-white hover:underline mx-2">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </p>
</div>
</div>

</footer>

  );
}

export default Footer;
