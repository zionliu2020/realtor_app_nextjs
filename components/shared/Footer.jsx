import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="flex flex-row gap-12">
        {/* ----------social media icons */}
        <ul className="icon-list">
          <li className="icon-item">
            <a href="/">
              <FaFacebook />
            </a>
          </li>
          <li className="icon-item">
            <a href="/">
              <FaFacebook />
            </a>
          </li>
          <li className="icon-item">
            <a href="/">
              <FaFacebook />
            </a>
          </li>
          <li className="icon-item">
            <a href="/">
              <FaFacebook />
            </a>
          </li>
        </ul>

        {/* links */}
        <ul className="link-list">
          <li>
            <Link href="/">link</Link>
          </li>
          <li>
            <Link href="/">link</Link>
          </li>
          <li>
            <Link href="/">link</Link>
          </li>
          <li>
            <Link href="/">link</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
