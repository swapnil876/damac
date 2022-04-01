import { gql } from '@apollo/client';

const ARNEWSLISTING = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["news_listing"]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeNewsListing{
         nid
        fieldHeading1N
        fieldSec2Heading
        fieldHeading3
        fieldHeading4
        fieldNewsLetterText
        
      }
    }
    }
  }
}`;

export { ARNEWSLISTING };
