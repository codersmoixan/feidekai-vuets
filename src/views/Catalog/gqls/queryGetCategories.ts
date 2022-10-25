/**
 * @api {QUERY} category Fetch list of categories
 * @apiGroup Catalog
 */
export default `
  query GetCategories {
    category(id: 2) {
      id
      name
      children {
        id
        include_in_menu
        name
        description
        image
        position
        url_key
      }
    }
  }
`;
