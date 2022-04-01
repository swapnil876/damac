import { gql } from '@apollo/client';

const BLOGSDETAILS = gql`
query BLOGSDETAILS($id: String!){
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "nid", language:EN, value: [$id]}]}) {
    entities {
      entityTranslation(language: EN) {
        ... on NodeBlog{
          nid,
         title,
         fieldShortText
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
         fieldTag {
           targetId
           entity{
             name
           }
         }
         fieldAuthor {
           targetId
           entity{
             name
           }
         }
         entityCreated
       }
        }
    }
  }
}`;

export { BLOGSDETAILS };
