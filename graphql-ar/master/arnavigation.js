import { gql } from '@apollo/client';

const ARNAVIGATION = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["navigation_menu"]}]}) {
     entities {
      entityTranslation(language: AR) {
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

export { ARNAVIGATION };
