import { gql } from "@apollo/client"

const query = gql`query Topic($name: String!){
    topic(name: $name){
      id
      name
      stargazerCount
      viewerHasStarred 
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
        relatedTopics {
          id
          name
          }
        }
    }
  }
`;
export default query;