import { gql } from '@apollo/client';

const FOOTERLINKS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["footer"]}]}) {
    entities {
      ... on NodeFooter{
         nid,
         fieldAddress
         fieldAddressHeader
         body
         fieldCopyrightNavigation
         fieldCopyrightText
         fieldLogo
         fieldNavigationLinks
         fieldNewsletterText
         fieldSocialMediaLinks
    }
  }
}
}`;

export { FOOTERLINKS };
