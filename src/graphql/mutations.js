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
