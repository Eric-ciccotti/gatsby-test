// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Titre de mon site !">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="https://kinsta.com/fr/wp-content/uploads/sites/4/2019/05/site-portfolio-1024x512.png" alt="image d'un portfolio" />
    </Layout>
  )
}


export default IndexPage;
