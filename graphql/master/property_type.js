import { gql } from '@apollo/client';

const PROPERTY_TYPE = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", language:EN, value: ["property_type"]}]}) {
    entities{
      entityTranslation(language: EN) {
        ... on TaxonomyTermPropertyType{
          tid
          name
        }
        }
    }
  }
}`;

export { PROPERTY_TYPE };
