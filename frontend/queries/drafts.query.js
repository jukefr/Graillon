import { gql, useQuery } from '@apollo/client'

const DRAFTS_QUERY = gql`
  query Drafts {
    drafts {
      id
      title
      content
      author {
        name
      }
    }
  }
`

export default DRAFTS_QUERY
