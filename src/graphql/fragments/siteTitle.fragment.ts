import {graphql} from 'gatsby'

export const TitlePageQueryFragment = graphql`
  fragment SiteTitle on Site {
    siteMetadata {
      title
    }
  }
`
