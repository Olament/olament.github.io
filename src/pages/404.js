import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

export default function FourOhFour() {
  return (
    <Layout>
      <Helmet title={`404 | Zixuan Guo`} />
      <div className="container text-center">
        <header>
          <h1>404</h1>
          <p className="subtitle">This was probably a mistake.</p>
        </header>
      </div>
    </Layout>
  )
}
