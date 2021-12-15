import { gql } from '@apollo/client';

const BLOG_CATEGORY = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", value: ["blog_category"]}]}) {
    entities{
      ... on TaxonomyTermBlogCategory{
        tid,
        name,
        status
      }
    }
  }
}`;

export { BLOG_CATEGORY };
