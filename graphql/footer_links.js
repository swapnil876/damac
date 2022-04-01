import { gql } from '@apollo/client';

const FOOTER_LINKS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["footer"]}]}) {
    entities {
      entityTranslation(language: EN) {
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
            entity{
             ... on ParagraphMenuItems{
               fieldLink
               fieldMenuNam
             }
           }
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
             ... on ParagraphMenuItems{
               fieldLink
               fieldMenuNam
             }
             id
           }
          } 
          fieldNewsletterText
          fieldSocialMediaLinks {
            entity{
              ... on ParagraphLinksWithIcon{
               fieldIconL{
                 url
               }
               fieldLinkL
             }
           }
          }
      }
        }
  }
}
}`;

export { FOOTER_LINKS };
