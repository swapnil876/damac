import { gql } from '@apollo/client';

const ARGOVERNANCE_COMMITTEE = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["governance_committee"]}]}) {
    entities {
      entityTranslation(language: AR) {
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

export { ARGOVERNANCE_COMMITTEE };
