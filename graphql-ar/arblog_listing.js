import { gql } from '@apollo/client';

const ARBLOGSLISTING = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["blogs_listing"]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeBlogsListing{
         nid
        fieldPageTitleBlogs
        
      }
    }
    }
  }
}`;

export { ARBLOGSLISTING };
