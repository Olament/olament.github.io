import React from "react"

import Nav from "./nav"
import Footer from './footer'


import "../style.css"

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>
        { children }
      </main>
      <Footer />
    </>
  )
}