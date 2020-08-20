import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Projects from '../components/project'

import projects from '../data/projects'

import "../style.css"
import "../new-moon.css"

import GithubIcon from '../../static/logo-github.svg'
import Posts from "../components/posts"

import { getSimplifiedPosts } from '../utils/helpers'


export default function Home({data}) {
  const latest = data.allMarkdownRemark.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])

  const Section = ({ title, children, ...props }) => (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )

  return (
    <Layout>
      <Helmet title={"Zixuan Guo"} />
      <section className="lead">
        <div className="container">
          <div className="copy">
            <h1>
              Hey! I'm Zixuan Guo.
            </h1>
            <p>
              I am a software engineer and computer vision researcher.
            </p>
            <p className="flex">
              <a
                href="https://github.com/Olament"
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                <div style={{display: "flex"}}>
                  My Github profile <img src={GithubIcon} alt="Github Logo" style={{display: "inline-block", marginLeft: "0.5rem"}}/>
                </div>
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="container">
        <Section title="Latest">
          <Posts data={simplifiedLatest} tags />
        </Section>
        <Section title="Projects">
          <Projects data={projects} />
        </Section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          date
          slug
          title
          tags
        }
      }
    }
  }
}
`