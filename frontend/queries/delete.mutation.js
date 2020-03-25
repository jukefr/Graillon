import { gql } from '@apollo/client';

const CREATE_MUTATION = gql`
mutation DeleteMutation($id: ID!) {
    deletePost(id: $id) {
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
`;

export default CREATE_MUTATION;