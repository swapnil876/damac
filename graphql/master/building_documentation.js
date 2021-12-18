import { gql } from '@apollo/client';

const BUILDING_DOCUMENTATION = gql`
  query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["building_documentaion"]}]}) {
    entities {
      ... on NodeBuildingDocumentation{
         nid,
         fieldFile {
           targetId
           display
           description
         },
         body{
          value
        }
      }
    }
  }
}`;

export { BUILDING_DOCUMENTATION };
