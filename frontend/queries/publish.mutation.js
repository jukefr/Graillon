import { gql } from '@apollo/client';

const PUBLISH_MUTATION = gql`
 mutation PublishMutation($id: ID!) {
    publish(id: $id) {
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

export default PUBLISH_MUTATION;