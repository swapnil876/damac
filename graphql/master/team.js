import { gql } from '@apollo/client';

const TEAM = gql`
  query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["team"]}]}) {
    entities {
      entityTranslation(language: EN) {
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

export { TEAM };
