import { gql } from '@apollo/client';

const ARNEWSDETAILS = gql`
query NEWSDETAIL($id: String!){
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "nid", language:AR, value: [$id]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeNews{
         nid,
         title
        fieldCategoryn {
           entity{
            ... on TaxonomyTermNewsCategory{
              tid
              name
            }
          }
        },
        fieldFeatureImageMobileNews {
          targetId
          title
          url
        },
        fieldFeatureImageDesktopNews {
          targetId
          title
          url
        },
        body{
          value
        }
      }
    }
    }
  }
}`;

export { ARNEWSDETAILS };
