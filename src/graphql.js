import gql from 'graphql-tag'

export const ME = gql`
  query me {
    user(login: "taro3256") {
      name
      avatarUrl
    }
  }
`