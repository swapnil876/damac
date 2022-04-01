import { gql } from '@apollo/client';

const BASICPAGE = gql`
query BASICPAGE($type: String!){
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "field_page_type.entity.tid", language:EN, value: [$type]}]}) {
     entities {
      entityTranslation(language: EN) {
        ... on NodePage{
          nid,
         fieldPageType{
           entity{
             tid
             name
           }
         }
          body{
           value
         }
       }
        }
     }
   }
 }`;

export { BASICPAGE };
