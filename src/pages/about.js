import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <header>
        <div className="container medium text-center">
          <h1>README</h1>
        </div>
      </header>
      <section>
        <div className="container medium">
          No, I did not write this by myself. Most components of this site are based on <a href='https://www.taniarascia.com/'>Tania Rascia's</a> blog.
        </div>
      </section>
    </Layout>
  )
}