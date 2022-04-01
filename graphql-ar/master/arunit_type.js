import { gql } from '@apollo/client';

const ARUNIT_TYPE = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", language:AR,  value: ["unit_type"]}]}) {
    entities{
      entityTranslation(language: AR) {
      ... on TaxonomyTermUnitType{
        tid
        name
      }
    }
    }
  }
}`;

export { ARUNIT_TYPE };
