import { gql } from "@apollo/client";


export const SIGN_UP = gql`
  mutation SignUp($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      id
      username
   }
 }
`
