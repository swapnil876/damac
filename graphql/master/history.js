import { gql } from '@apollo/client';

const HISTORY = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["history"]}]}) {
      entities {
        ... on NodeHistory{
           nid,
           fieldYear,
           body{
            value
          }
        }
      }
    }
  }`;

export { HISTORY };
