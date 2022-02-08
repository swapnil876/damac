import { gql } from '@apollo/client';

const BOARD_MEMBERS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["board_members"]}]}) {
    entities {
      ... on NodeBoardMembers{
         nid,
         fieldPageTitleBm{
           value
         }
         fieldMembers {
           targetId
           targetRevisionId
           entity {
             id
             parentFieldName
             
           }
         }
      }
    }
  }
}`;

export { BOARD_MEMBERS };
