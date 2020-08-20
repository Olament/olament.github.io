import React from 'react'
import { Link } from 'gatsby'


export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          <div>
            <Link to="/" className="brand">
              <span className="emoji">⌨️</span> Zixuan Guo
            </Link>
          </div>
          <div className="flex">
            <Link to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}