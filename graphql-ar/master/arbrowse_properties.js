import { gql } from '@apollo/client';

const ARBROWSE_PROPERTIES = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["browse_property"]}]}) {
     entities {
      entityTranslation(language: AR) {
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
         fieldWhyInvestHeading
         fieldWhyInvestCol1
         fieldWhyInvestCol2
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
   }
 }`;

export { ARBROWSE_PROPERTIES };
