import { gql } from '@apollo/client';

const LOCATIONS = gql`
query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", language:EN, value: ["location"]}]}) {
    entities{
      entityTranslation(language: EN) {
        ... on TaxonomyTermLocation{
          tid
          name
        }
        }
    }
  }
}`;

export { LOCATIONS };
