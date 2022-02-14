import { gql } from '@apollo/client';

const CONTACTUS = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["contact_us"]}]}) {
      entities {
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
}`;

export { CONTACTUS };