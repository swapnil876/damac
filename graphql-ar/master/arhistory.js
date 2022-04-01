import { gql } from '@apollo/client';

const ARHISTORY = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["history"]}]}) {
      entities {
        entityTranslation(language: AR) {
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

export { ARHISTORY };
