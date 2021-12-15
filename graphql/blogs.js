import { gql } from '@apollo/client';

const BLOGS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["blog"]}]}) {
    entities {
      ... on NodeBlog{
         nid,
        title,
        fieldCategory {
          targetId
          entity{
            tid,
            name
          }
        },
        fieldFeatureImageMobile {
          targetId
          title
          url
        },
        fieldFeatureImageDesktop {
          targetId
          title
          url
        }
        body{
          value
        }
      }
    }
  }
}`;

export { BLOGS };
