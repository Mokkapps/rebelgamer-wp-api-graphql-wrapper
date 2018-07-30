const { gql } = require('apollo-server');

export const typeDefs = gql`
    type Post {
      id: ID           
      date: String
      link: String
      title: String
      description: String
      author: String
      imageUrl: String
      content: String
      tags: [String]
    }

    # This type specifies the entry points into our API. 
    type Query {
      posts: [Post] 
    }
    `;