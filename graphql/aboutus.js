import { gql } from '@apollo/client';

const ABOUT_US = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["about_us"]}]}) {
    entities {
      ... on NodeAboutUs{
        nid
        fieldHeader1
        fieldHeader2
        fieldHeader3
        fieldHeader4
        fieldHeader5
        fieldCounter3 {
          entity{
            ... on ParagraphCounter{
              id
              fieldCountText
              fieldCountValue
            }
          }
        }
        fieldDescription1
        fieldDescription2
        fieldDescription3
        fieldDescription4 {
          value
        }
        fieldDescription5 {
          value
        }
        fieldImage2 {
          url
        }
        fieldImage3 {
          url
        }
        fieldImage4 {
          url
        }
        fieldCsrDescription5
        fieldMainImageVideoDesktop {
          targetId
          display
          description
        }
        fieldMainImageVideoMobile {
          targetId
          display
          description
        }
        fieldCanonicalUrl
        fieldMetaDescription
        fieldMetaTitle
        fieldMetaKeywords
      }
    }
  }
}`;

export { ABOUT_US };
