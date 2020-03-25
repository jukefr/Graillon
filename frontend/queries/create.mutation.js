import { gql } from '@apollo/client'

const CREATE_MUTATION = gql`
  mutation createDraft($title: String!, $content: String!) {
    createDraft(title: $title, content: $content) {
      id
      published
    }
  }
`

export default CREATE_MUTATION
