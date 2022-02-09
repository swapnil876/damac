import { gql } from '@apollo/client';

const INVESTORRELATIONS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["investor_relations"]}]}) {
    entities {
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
}`;

export { INVESTORRELATIONS };
