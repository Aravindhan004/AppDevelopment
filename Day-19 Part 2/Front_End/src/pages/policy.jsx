import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function policy() {
  return (
    <div>
        <Navbar/>
        <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-2 py-3 mt-10 font-extrabold">Last Updated: 25.09.2023</p>
      <p className="mb-4">
        This Privacy Policy describes how Bookstagram collects, uses, and shares
        information from users of our social network platform for book lovers,
        "Bookstagram." Please read this Privacy Policy carefully before using
        our Platform.
      </p>
      <p className="mb-4">
        By using our Platform, you agree to the practices described in this
        Privacy Policy. If you do not agree to this Privacy Policy, please do
        not use the Platform.
      </p>
      <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect information you provide directly to us, such as:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Account Information: When you register for an account, we collect your username, email address, and password.</li>
        <li>Profile Information: You may choose to provide additional information, such as your name, profile picture, and a bio, to personalize your profile.</li>
        <li>User Content: We collect content you post, upload, or otherwise share on the Platform, including book reviews, comments, and messages.</li>
        <li>Communication: We may collect information from your communications with other users on the Platform.</li>
        <li>Usage Information: We automatically collect information about how you use the Platform, including your interactions, preferences, and browsing history.</li>
        <li>Device Information: We may collect information about the device you use to access the Platform, including device type, operating system, and unique device identifiers.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect for various purposes, including:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Providing the Platform: To operate and maintain the Platform, including user accounts and features.</li>
        <li>Personalization: To personalize your experience on the Platform, such as recommending books and users to follow.</li>
        <li>Communication: To communicate with you, respond to your requests, and send you updates and notifications related to the Platform.</li>
        <li>Analytics: To analyze and improve the Platform's performance and user experience.</li>
        <li>Legal Compliance: To comply with applicable laws, regulations, and legal processes.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We may share your information with:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Other users on the Platform as part of the normal functioning of the Platform (e.g., sharing book reviews and comments).</li>
        <li>Third-party service providers who assist us in operating and maintaining the Platform.</li>
        <li>Law enforcement, government agencies, or authorized third parties in response to a legal request.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">4. Your Choices</h2>
      <p className="mb-4">
        You can access and update certain information through your account settings. You may also unsubscribe from email communications from us.
      </p>
      <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your information; however, no method of data transmission or storage is completely secure. We cannot guarantee the security of your data.
      </p>
      <h2 className="text-xl font-semibold mb-2">6. Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top.
      </p>
    </div>
        <Footer/>

    </div>
  )
}
