import { gql } from '@apollo/client';

const NEWSLISTING = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["news_listing"]}]}) {
    entities {
      entityTranslation(language: EN) {
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

export { NEWSLISTING };
