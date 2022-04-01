import { gql } from '@apollo/client';

const NAVIGATION = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["navigation_menu"]}]}) {
     entities {
      entityTranslation(language: EN) {
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
   }
 }`;

export { NAVIGATION };
