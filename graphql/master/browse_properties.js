import { gql } from '@apollo/client';

const BROWSE_PROPERTIES = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["browse_property"]}]}) {
     entities {
       ... on NodeBrowseProperty{
          nid
          fieldPageTitleBp
         fieldStaticHeading
         fieldStaticCol1{
           value
         }
         fieldStaticCol2{
           value
         }
         fieldMultipleFaqsBw{
           entity{
             ... on ParagraphMultipleFaqs{
               fieldAnswer
               fieldQuestion
             }
           }
         }
       }
     }
   }
 }`;

export { BROWSE_PROPERTIES };
