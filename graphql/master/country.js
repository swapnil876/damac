import { gql } from '@apollo/client';

const COUNTRY = gql`
  query{
    entityTranslation(language: EN ) {
      taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", language:EN, value: ["country"]}]}) {
        entities{
          ... on TaxonomyTermCountry{
            tid
            name
          }
      }
    }
  }
}`;

export { COUNTRY };
