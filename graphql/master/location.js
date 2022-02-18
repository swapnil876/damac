import { gql } from '@apollo/client';

const LOCATIONS = gql`
query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", value: ["location"]}]}) {
    entities{
      ... on TaxonomyTermLocation{
        tid
        name
      }
    }
  }
}`;

export { LOCATIONS };
