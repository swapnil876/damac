import { gql } from '@apollo/client';

const GOVERNANCE_COMMITTEE = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["governance_committee"]}]}) {
    entities {
      ... on NodeGovernanceCommittee{
        nid,
        title
        body{
          value
        }
        fieldMetaTitleGc
        fieldMetaDescriptionGc
        fieldMetaKeywordsGc
        fieldCanonicalUrlGc
      }
    }
  }
}`;

export { GOVERNANCE_COMMITTEE };
