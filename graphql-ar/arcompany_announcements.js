import { gql } from '@apollo/client';

const ARCOMPANY_ANNOUNCEMENTS = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["company_announcements"]}]}) {
      entities {
         entityTranslation(language: AR) {
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
 }`;

export { ARCOMPANY_ANNOUNCEMENTS };
