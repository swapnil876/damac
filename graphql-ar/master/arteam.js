import { gql } from '@apollo/client';

const ARTEAM = gql`
  query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type" ,language:AR, value: ["team"]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeTeam{
         nid,
        fieldName,
        fieldTimage {
          targetId
          url
        },
         body{
          value
        }
      }
    }
    }
  }
}`;

export { ARTEAM };
