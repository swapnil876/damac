import { gql } from '@apollo/client';

const BUILDING_DOCUMENTATION = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["building_documentation"]}]}) {
    entities {
      ... on NodeBuildingDocumentation{
         nid
        entityLabel
         fieldFile {
          targetId
          display
          description
          entity{ url }
        }
         body{
          value
        }
      }
    }
  }
}`;

export { BUILDING_DOCUMENTATION };
