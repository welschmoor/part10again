import { gql } from "@apollo/client";


export const SIGN_UP = gql`
  mutation SignUp($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      id
      username
   }
 }
`

export const AUTHENTICATE = gql`
  mutation AUTHENTICATE($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      user {
        username
      }
      accessToken
      expiresAt
   }
 }
`

export const CREATE_REVIEW = gql`
mutation Mutation($review: CreateReviewInput) {
  createReview(review: $review) {
    id
    user {
      username
      id
    }
    repository {
      id
    }
    createdAt
    rating
    repositoryId
    userId
    text
  }
}
`

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`