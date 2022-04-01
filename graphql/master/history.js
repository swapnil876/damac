import { gql } from '@apollo/client';

const HISTORY = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["history"]}]}) {
      entities {
        entityTranslation(language: EN ) {
          ... on NodeHistory{
            nid,
            fieldYear,
            body{
             value
           }
         }
          }
      }
    }
  }`;

export { HISTORY };
