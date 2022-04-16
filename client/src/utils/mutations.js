import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser(
      $username: String!, 
      $email: String!, 
      $password: String!) {addUser(
          username: $username, 
          email: $email, 
          password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
            author(s)
            bookId
            image
            link
            title
            description
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation removeBook($bookId: InputBook!) {
    removeBook(bookId: $bookId) {
        token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
            author(s)
            bookId
            image
            link
            title
            description
        }
    }
}
`;

export const REMOVE_BOOK = gql`
mutation saveBook($newBook: InputBook!) {
    saveBook(newBook: $newBook) {
        token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
            author(s)
            bookId
            image
            link
            title
            description
        }
    }
}
`;
`;