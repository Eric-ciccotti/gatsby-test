import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    React.useEffect(() => {
        console.log('LOG', data.allFile)
    }, [])

    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {data.allFile.edges.map(element => (
                    <li key={element.node.name}>{element.node.name}</li>
                ))}
            </ul>
        </Layout>
    )
}

export const query = graphql
    `query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      edges {
        node {
          name
        }
      }
    }
  }`
export default BlogPage