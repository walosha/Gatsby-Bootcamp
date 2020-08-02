import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const response = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  console.log(response)
  return (
    <header>
      <h2>{response.site.siteMetadata.title}</h2>
      <p>Author: {response.site.siteMetadata.author}</p>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  )
}
