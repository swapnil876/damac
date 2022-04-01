import { gql } from '@apollo/client';

const ARPARENTMENUITEMS = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", language:AR, value: ["parent_menu_items"]}]}) {
    entities{
      entityTranslation(language: AR) {
      ... on TaxonomyTermParentMenuItems{
        tid
        name
        description{
          value
        }
      }
    }
    }
  }
}`;

export { ARPARENTMENUITEMS };
