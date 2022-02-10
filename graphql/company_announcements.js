import { gql } from '@apollo/client';

const COMPANY_ANNOUNCEMENTS = gql`
   query {
      nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["company_announcements"]}]}) {
         entities {
         ... on NodeCompanyAnnouncements{
               nid
               fieldTitleCa
               fieldDate
            
         }
         }
      }
   }`;

export { COMPANY_ANNOUNCEMENTS };
