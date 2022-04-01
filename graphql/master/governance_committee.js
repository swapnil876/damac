import { gql } from '@apollo/client';

const GOVERNANCE_COMMITTEE = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["governance_committee"]}]}) {
    entities {
      entityTranslation(language: EN ) {
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
  }
}`;

export { GOVERNANCE_COMMITTEE };
