import { gql } from '@apollo/client';

const ARINVESTORRELATIONS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["investor_relations"]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeInvestorRelations{
         nid,
         fieldTitleIr{
          value
        }
        fieldTextHeading{
          value
        }
        fieldDescriptionHeading{
          value
        }
        fieldIframeContent
        
      }
    }
    }
  }
}`;

export { ARINVESTORRELATIONS };
