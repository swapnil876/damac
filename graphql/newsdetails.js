import { gql } from '@apollo/client';

const NEWSDETAILS = gql`
query NEWSDETAIL($id: String!){
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "nid", value: [$id]}]}) {
    entities {
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
}`;

export { NEWSDETAILS };
