import React from 'react';
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import 'modern-normalize/modern-normalize.css'
import './layout.css'
import Header from './header'

const Layout = ({ children, pageTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        

        <Header siteTitle={data.site.siteMetadata.title} pageTitle={pageTitle}/>

        <div>
          {children}
        </div>
      </>
    )}
  />
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
