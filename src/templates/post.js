import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

require(`katex/dist/katex.min.css`)

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="container">
          <article>
            <header className="article-header">
              <div className="container">
                <div className="thumb">
                  <h1>{frontmatter.title}</h1>
                </div>
              </div>
            </header>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`