import { gql } from '@apollo/client';

const PARENTMENUITEMS = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", language:EN, value: ["parent_menu_items"]}]}) {
    entities{
      entityTranslation(language: EN) {
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

export { PARENTMENUITEMS };
