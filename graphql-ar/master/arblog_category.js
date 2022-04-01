import { gql } from '@apollo/client';

const ARBLOG_CATEGORY = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", language:AR, value: ["blog_category"]}]}) {
    entities{
      entityTranslation(language: AR) {
      ... on TaxonomyTermBlogCategory{
        tid,
        name,
        status
      }
    }
    }
  }
}`;

export { ARBLOG_CATEGORY };
