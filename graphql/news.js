import { gql } from '@apollo/client';

const NEWS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["news"]}]}) {
    entities {
      ... on NodeNews{
         nid,
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

export { NEWS };
