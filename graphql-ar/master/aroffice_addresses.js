import { gql } from '@apollo/client';

const AROFFICE_ADDRESSES = gql`
  query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["office_addresses"]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeOfficeAddresses{
         nid,
         fieldPhone,
         body{
          value
        }
      }
    }
    }
  }
}`;

export { AROFFICE_ADDRESSES };
