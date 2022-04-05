import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
    return (
        <Layout pageTitle="Page about!">
            <p>C'est la page à propos de moi !</p>
            <StaticImage src="./../images/moi.jpg" alt="ma photo" />
        </Layout>

    )
}

export default About;