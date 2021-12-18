import { gql } from '@apollo/client';

const COUNTRY = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", value: ["country"]}]}) {
    entities{
      ... on TaxonomyTermCountry{
        tid
        name
      }
    }
  }
}`;

export { COUNTRY };
