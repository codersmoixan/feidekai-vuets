/**
 * @api {QUERY} category Fetch list of products from default category
 * @apiGroup Catalog
 */
export default function (sourceCode = "fitline"): string {
  return `
 {
    category(id: 2) {
      id
      name
      products(pageSize:999,currentPage: 1, sourceCode: "${sourceCode}") {
        total_count
        page_info {
          current_page
          page_size
          total_pages
        }
        items {
          id
          sku
          name
          url_key
          type_id
          special_price_qty
          only_x_left_in_stock
          stock_status
          media_gallery_entries {
            file
          }
          calculated_price
          special_price
          special_from_date
          special_to_date
          new_from_date
          new_to_date
          price {
            minimalPrice {
              amount {
                value
                currency
              }
              adjustments {
                amount {
                  value
                  currency
                }
                code
                description
              }
            }
            maximalPrice {
              amount {
                value
                currency
              }
              adjustments {
                amount {
                  value
                  currency
                }
                code
                description
              }
            }
            regularPrice {
              amount {
                value
                currency
              }
              adjustments {
                amount {
                  value
                  currency
                }
                code
                description
              }
            }
          }
          ... on BundleProduct {
            items {
              option_id
              options {
                id
                qty
              }
            }
          }
          categories {
            id
          }
          product_line
          point_value
        }
      }
    }
  }
`;
}
