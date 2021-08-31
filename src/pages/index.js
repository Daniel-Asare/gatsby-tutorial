import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/Button"

export default function Home() {
  return(
   <div>
    <Layout>
      <h1>This is my HomePage</h1>
      <ExampleButton>Click me</ExampleButton>
    </Layout>
   </div>
  )
}
