import { gql } from '@apollo/client';

const OFFICE_ADDRESSES = gql`
  query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["office_addresses"]}]}) {
    entities {
      ... on NodeOfficeAddresses{
         nid,
         fieldPhone,
         body{
          value
        }
      }
    }
  }
}`;

export { OFFICE_ADDRESSES };
