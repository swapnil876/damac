import { gql } from '@apollo/client';

const BUILDING_DOCUMENTATION = gql`
query BUILDING_DOCUMENTATION($id: String!){
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "nid", value: [$id]}]}) {
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
        fieldMetaTitleBldgdoc
        fieldMetaDescriptionBldgdoc
        fieldMetaKeywordsBldgdoc
        fieldCanonicalUrlBldgdoc
      }
    }
  }
}`;

export { BUILDING_DOCUMENTATION };
