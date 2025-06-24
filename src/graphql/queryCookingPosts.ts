export const GET_COOKING_POSTS = `
  query {
    cookingPostsCollection {
      items {
        title
        description {
          json
        }
        image{
          url
          title
          description
          width
          height
        }
      }
    }
  }
`;