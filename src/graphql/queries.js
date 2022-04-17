import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          id
          createdAt
          description
          forksCount
          fullName
          language
          name
          ownerAvatarUrl
          ownerName
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`;

export const AM_I_SIGNEDIN = gql`
 query Me {
    me {
      id
      username
    }
  }
`
