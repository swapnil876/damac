import { gql } from '@apollo/client';

const BLOG_CATEGORY = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", language:EN, value: ["blog_category"]}]}) {
    entities{
      entityTranslation(language: EN) {
        ... on TaxonomyTermBlogCategory{
          tid,
          name,
          status
        }
        }
    }
  }
}`;

export { BLOG_CATEGORY };
