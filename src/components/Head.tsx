import React from 'react'
import {Helmet} from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {useDynamicFavicon} from '../hooks/useDynamicFavicon'

type StaticQueryData = {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
      image: string
      googleSiteVerification: string
      author: {
        name: string
      }
    }
  }
}

interface HeadProps {
  readonly title: string
  readonly description?: string
  readonly image?: string
  readonly lang?: string
  readonly keywords?: string[]
}

const Head: React.FC<HeadProps> = ({
  title,
  description,
  image,
  lang,
  keywords
}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            googleSiteVerification
            author {
              name
            }
          }
        }
      }
    `}
    render={(data: StaticQueryData): React.ReactElement | null => {
      const metaDescription = description || data.site.siteMetadata.description
      const metaImage =
        data.site.siteMetadata.siteUrl +
        `${image || data.site.siteMetadata.image}`
      lang = lang || 'en'
      keywords = keywords || []
      useDynamicFavicon()

      return (
        <Helmet
          htmlAttributes={{
            lang
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription
            },
            {
              property: `image`,
              content: metaImage
            },
            {
              property: `og:title`,
              content: title
            },
            {
              property: `og:description`,
              content: metaDescription
            },
            {
              property: `og:image`,
              content: metaImage
            },
            {
              property: `og:type`,
              content: `website`
            },
            {
              name: `twitter:card`,
              content: `summary`
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author.name
            },
            {
              name: `twitter:title`,
              content: title
            },
            {
              name: `twitter:description`,
              content: metaDescription
            },
            {
              name: `twitter:image`,
              content: metaImage
            },
            {
              name: `google-site-verification`,
              content: data.site.siteMetadata.googleSiteVerification
            }
          ].concat(
            keywords.length > 0
              ? {
                  name: `keywords`,
                  content: keywords.join(`, `)
                }
              : []
          )}
        />
      )
    }}
  />
)

export default Head
