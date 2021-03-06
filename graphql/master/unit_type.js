import { gql } from '@apollo/client';

const UNIT_TYPE = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid",language:EN, value: ["unit_type"]}]}) {
    entities{
      entityTranslation(language: EN) {
        ... on TaxonomyTermUnitType{
          tid
          name
        }
        }
    }
  }
}`;

export { UNIT_TYPE };
