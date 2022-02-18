import { gql } from '@apollo/client';

const FOOTER_LINKS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["footer"]}]}) {
    entities {
      ... on NodeFooter{
         nid,
         fieldAddress {
           value
           format
           processed
           summary
           summaryProcessed
         }
         fieldAddressHeader
         body {
           value
           format
           processed
           summary
           summaryProcessed
         }
         fieldCopyrightNavigation {
           targetId
           targetRevisionId
         }
         fieldCopyrightText
         fieldLogo {
           width
           url
           height
           targetId
           alt
           title
         }
         fieldNavigationLinks {
          entity {
            id
           entityLabel 
          }
           targetId
           targetRevisionId
         } 
         fieldNewsletterText
         fieldSocialMediaLinks {
           targetId
           targetRevisionId
         }
    }
  }
}
}`;

export { FOOTER_LINKS };
