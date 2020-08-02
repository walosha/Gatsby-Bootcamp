import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1>Welcome Page</h1>
      <p>This is Olawale Afuye Main Page </p>
      <p>
        Need a developer ? contact me <Link to="/contact">here</Link>
      </p>
    </Layout>
  )
}
