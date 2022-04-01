import { gql } from '@apollo/client';

const ARLOCATIONS = gql`
query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", language:AR, value: ["location"]}]}) {
    entities{
      entityTranslation(language: AR) {
      ... on TaxonomyTermLocation{
        tid
        name
      }
    }
    }
  }
}`;

export { ARLOCATIONS };
