import { gql } from '@apollo/client';

const NAVIGATION = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["navigation_menu"]}]}) {
     entities {
       ... on NodeNavigationMenu{
          nid
        	fieldMultipleMenuItems{
            entity{
              ... on ParagraphMenuItems{
                id
                fieldLink
                fieldMenuNam
                fieldMenuType{
                  entity{
                    ... on TaxonomyTermParentMenuItems{
                      tid
                      name
                    }
                  }
                }
              }
            }
          }
       }
     }
   }
 }`;

export { NAVIGATION };
