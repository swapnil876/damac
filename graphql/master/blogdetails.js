import { gql } from '@apollo/client';

const BLOGSDETAILS = gql`
query BLOGSDETAILS($id: String!){
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "nid", value: [$id]}]}) {
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

export { BLOGSDETAILS };
