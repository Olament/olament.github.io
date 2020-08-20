import React from 'react'
import { Link } from 'gatsby'

import gatsby from '../../content/thumbnails/Gatsby.png'
import tania from '../../content/thumbnails/Tania.png'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="footer-links">
          <Link to="/about">About</Link>
          <a
            href="https://github.com/Olament"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </nav>
        <nav className="flex justify-center">
          <a
            href="https://www.gatsbyjs.org/"
            title="Built with Gatsby"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={gatsby} className="footer-img" alt="Gatsby" />
          </a>
          <a
            href="https://www.taniarascia.com/"
            title="Tania Rascia's webstie, where this theme comes from"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={tania} className="footer-img" alt="Tania" />
          </a>
        </nav>
      </section>
    </footer>
  )
}
