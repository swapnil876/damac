import { gql } from '@apollo/client';

const ARPROPERTY_TYPE = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", language:AR, value: ["property_type"]}]}) {
    entities{entityTranslation(language: AR) {
      ... on TaxonomyTermPropertyType{
        tid
        name
      }
    }
    }
  }
}`;

export { ARPROPERTY_TYPE };
