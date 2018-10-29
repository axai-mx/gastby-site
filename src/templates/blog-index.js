import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { config, location, language, posts } = this.props
    const title = get(config, 'frontmatter.title')
    const description = get(config, 'frontmatter.description')
    const bio = get(config, 'html')

    return (
      <Layout location={location} title={title}>
        <Helmet
          htmlAttributes={{ lang: language }}
          meta={[{ name: 'description', content: description }]}
          title={title}
        />
        <Bio>
          <div dangerouslySetInnerHTML={{ __html: bio }} />
        </Bio>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const blogIndexFragment = graphql`
  fragment ConfigIndex on MarkdownRemark {
    html
    frontmatter {
      title
      description
    }
  }
  fragment BlogIndex on MarkdownRemark {
    excerpt
    fields {
      slug
    }
    frontmatter {
      date(formatString: "LL")
      title
    }
  }
`