import { gql } from '@apollo/client';

const BOARD_MEMBERS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["board_members"]}]}) {
    entities {
      ... on NodeBoardMembers{
         nid,
         fieldBname,
        fieldBimage {
          targetId
          title
          url
        },
        body{
          value
        }
      }
    }
  }
}`;

export { BOARD_MEMBERS };
