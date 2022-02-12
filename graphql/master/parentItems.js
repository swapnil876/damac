import { gql } from '@apollo/client';

const PARENTMENUITEMS = gql`
  query{
  taxonomyTermQuery (limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "vid", value: ["parent_menu_items"]}]}) {
    entities{
      ... on TaxonomyTermParentMenuItems{
        tid
        name
      }
    }
  }
}`;

export { PARENTMENUITEMS };
