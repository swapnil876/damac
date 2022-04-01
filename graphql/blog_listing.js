import { gql } from '@apollo/client';

const BLOGSLISTING = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["blogs_listing"]}]}) {
    entities {
      entityTranslation(language: EN) {
        ... on NodeBlogsListing{
          nid
         fieldPageTitleBlogs
         
       }
        }
    }
  }
}`;

export { BLOGSLISTING };
