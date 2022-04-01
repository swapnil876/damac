import { gql } from '@apollo/client';

const ARBOARD_MEMBERS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["board_members"]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeBoardMembers{
         nid,
         fieldPageTitleBm{
           value
         }
         fieldMembers {
           targetId
           targetRevisionId
           entity {
            ... on ParagraphMultipleTeamAbout{
                 id
                 fieldImage{
                    url
                 }
                 fieldName
                 fieldTitleTeam
              }
           }
         }
      }
    }
    }
  }
}`;

export { ARBOARD_MEMBERS };
