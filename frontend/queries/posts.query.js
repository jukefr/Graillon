import { gql, useQuery } from '@apollo/client'

const POSTS_QUERY = gql`
  query Posts {
    feed {
      id
      title
      published
      content
      author {
        id
        name
        email
      }
    }
  }
`

export default POSTS_QUERY
