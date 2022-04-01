import { gql } from '@apollo/client';

const OFFICE_ADDRESSES = gql`
  query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["office_addresses"]}]}) {
    entities {
      entityTranslation(language: EN) {
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

export { OFFICE_ADDRESSES };
