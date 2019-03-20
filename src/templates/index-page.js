import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Banner from '../components/Banner'
import image from '../img/cardImage.jpg'
import Helmet from 'react-helmet'

const renderBlocks = (homeblocks) => {
  return homeblocks.map((block, ix) => (
    <Card 
      title={ block.title }
      small={ true }
      image={ block.image }
      key={ix}
    />
  ));
};

const renderSections = (homesections) => {
  return homesections.map((block, ix) => (
    <Card 
      title={ block.title }
      subtitle={ block.subtitle }
      buttonText={ block.buttontext }
      image={ block.image }
      large={ true }
      key={ix}>
      { block.description } 
    </Card>
  ));
}

const IndexPageTemplate = ({homeblocks, homesections, aboutsection}) => (
  <div className="s-body">
    
    <Banner image={ image } />
    
    {
    
      homeblocks ? 
      <div className="s-body_card-container wrapper">
        { renderBlocks(homeblocks) }
      </div> : null
    
    }

    {
      homesections ?
      <div className="s-body_card-container s-body_card-container--dark">
        { renderSections(homesections) }
      </div> : null
    }

    {
      aboutsection ?
      <div className="wrapper">
        <Card 
          title={ aboutsection.title }
          image={ aboutsection.image }
          subtitle={ aboutsection.subtitle }
          buttonText={ aboutsection.buttontext }
          horizontal={ true }>
          { aboutsection.description }
        </Card>
      </div> : null
    }

  </div>
)

const IndexPage = ({data}) => {
  const { frontmatter } = data.markdownRemark
  const { siteMetadata } = data.site;
  const slider = require('../scripts/slider');

  return (
    <Layout>
      
      <Helmet>
        <title>{`${ siteMetadata.title }`}</title>
        <meta
            name="description"
            content={`${ siteMetadata.description }`}
        />
      </Helmet>

      <IndexPageTemplate
        homeblocks={ frontmatter.homeblocks }
        homesections={ frontmatter.homesections }
        aboutsection={ frontmatter.aboutsection }
      />
      
    </Layout>
  );
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  site {
    siteMetadata {
      title
      description
    }
  }
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        templateKey
        homeblocks {
          image
          title
        }
        homesections {
          buttontext
          description
          image
          subtitle
          title
        }
        aboutsection {
          buttontext
          description
          image
          subtitle
          title
        } 
      }
  }
}
`