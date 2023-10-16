import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-0.1 mb-16 mt-24">
        <h1 className="text-2xl font-bold py-3">1. Introduction</h1>
        <p className="mb-4">
          Welcome to Bookstagram! These terms and conditions govern your use of
          our website and mobile application ("Bookstagram"). By accessing or using
          our Platform, you agree to comply with and be bound by these terms and
          conditions. If you do not agree with these terms, please do not use
          our Platform.
        </p>

        <h2 className="text-xl font-bold mb-4">2. User Registration</h2>
        <p className="mb-2">
          <span className="font-semibold">2.1. </span> To use certain features
          of our Platform, you may be required to register for an account.
        </p>
        <p className="mb-2">
          <span className="font-semibold">2.2. </span> You agree to provide
          accurate and up-to-date information during the registration process and
          to keep your account information current.
        </p>
        <p className="mb-4">
          <span className="font-semibold">2.3. </span> You are responsible for
          maintaining the confidentiality of your account credentials and for all
          activities that occur under your account.
        </p>

        <h2 className="text-xl font-bold mb-4">3. User Content</h2>
        <p className="mb-2">
          <span className="font-semibold">3.1. </span> You retain ownership of
          any content you submit to our Platform, including book reviews,
          comments, and messages.
        </p>
        <p className="mb-4">
          <span className="font-semibold">3.2. </span> By submitting content to
          our Platform, you grant us a non-exclusive, worldwide, royalty-free
          license to use, reproduce, modify, adapt, publish, translate,
          distribute, and display such content.
        </p>

        <h2 className="text-xl font-bold mb-4">4. Code of Conduct</h2>
        <p className="mb-2">
          <span className="font-semibold">4.1. </span> You agree not to use our
          Platform to:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Post or transmit any content that is unlawful, defamatory, obscene,
            harassing, or otherwise objectionable.
          </li>
          <li>
            Impersonate any person or entity or falsely represent your
            affiliation with any person or entity.
          </li>
          <li>
            Interfere with the operation of the Platform, including the use of
            any automated scripts or bots.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4">5. Privacy Policy</h2>
        <p className="mb-4">
          <span className="font-semibold">5.1. </span> Our use of your personal
          information is governed by our Privacy Policy. By using our Platform,
          you consent to the collection and use of your personal information as
          described in the Privacy Policy.
        </p>

        <h2 className="text-xl font-bold mb-4">6. Termination</h2>
        <p className="mb-4">
          <span className="font-semibold">6.1. </span> We reserve the right to
          terminate or suspend your account and access to our Platform at our
          sole discretion, without notice, for any conduct that we believe
          violates these terms and conditions or is harmful to other users or
          us.
        </p>

        <h2 className="text-xl font-bold mb-4">7. Changes to Terms and Conditions</h2>
        <p className="mb-8">
          <span className="font-semibold">7.1. </span> We may update these terms
          and conditions from time to time. Any changes will be posted on this
          page, and the date of the latest revision will be indicated at the
          top.
        </p>
      </div>
      <Footer />
    </div>
  );
}
