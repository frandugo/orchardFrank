export const GET_COOKING_SECTION = `
  query {
    coockieSectionsCollection {
      items {
        title
        info
        imgCollection {
          items {
            url
            description
            title
          }
        }
      }
    }
  }
`;