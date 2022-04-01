import { gql } from '@apollo/client';

const COMPANY_ANNOUNCEMENTS = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["company_announcements"]}]}) {
      entities {
         entityTranslation(language: EN) {
            ... on NodeCompanyAnnouncements{
               nid
                 fieldAnnouncement{
                entity{
                  url
                }
              }
               fieldTitleCa{
                  value
               }
               fieldDate{
                  value
               }
           
           }
            }
      }
   }
 }`;

export { COMPANY_ANNOUNCEMENTS };
