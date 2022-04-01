import { gql } from '@apollo/client';

const ARCONTACTUS = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["contact_us"]}]}) {
      entities {
        entityTranslation(language: AR) {
      ... on NodeContactUs{
            nid
            fieldPageTitleC
            fieldAddressesTitle
            fieldAddresses{
            entity{
               ... on ParagraphMultipleAddressesContactUs{
               fieldAddress{
                 value
               }
               fieldNumberC{
                 value
               }
               fieldTitleC{
                 value
               }
             }
           }
           }
         
      }
    }
      }
   }
}`;

export { ARCONTACTUS };