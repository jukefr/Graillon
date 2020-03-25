import { gql, useQuery } from '@apollo/client'

const POST_QUERY = gql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      id
      title
      content
      published
      author {
        id
        name
      }
    }
  }
`

export default POST_QUERY
