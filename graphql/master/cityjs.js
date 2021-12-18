import { gql } from '@apollo/client';

const CITY = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "field_country.entity.tid", value: ["1"]},{operator: EQUAL, field: "vid", value: ["city"]}]}) {
    entities{
      ... on TaxonomyTermCity{
        tid
        name
        fieldCountry {
          entity{
            tid
            name
          }
        }
      }
    }
  }
}`;

export { CITY };
