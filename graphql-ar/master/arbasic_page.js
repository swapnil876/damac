import { gql } from '@apollo/client';

const ARBASICPAGE = gql`
query BASICPAGE($type: String!){
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "field_page_type.entity.tid", language:AR, value: [$type]}]}) {
     entities {
      entityTranslation(language: AR) {
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

export { ARBASICPAGE };
