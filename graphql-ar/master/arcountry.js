import { gql } from '@apollo/client';

const ARCOUNTRY = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", language:AR, value: ["country"]}]}) {
    entities{
      entityTranslation(language: AR) {
      ... on TaxonomyTermCountry{
        tid
        name
      }
    }
    }
  }
}`;

export { ARCOUNTRY };
