import { gql } from '@apollo/client';

const ABOUT_US = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type",language:EN, value: ["about_us"]}]}) {
    entities {
      entityTranslation(language: EN) {
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
            fieldMultipleTeam{
              entity{
                ... on ParagraphMultipleTeamAbout{
                  fieldName,
                  fieldImage{
                    url
                  }
                  fieldTitleTeam
                }
              }
            }
            fieldMultipleHistory{
              entity{
                ... on ParagraphMultipleHistoryAbout{
                  fieldBody{
                    value
                  }
                  fieldYear
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
            fieldSection5Heading
            fieldTeamSubheading
            fieldHistoryHeading
            fieldHistorySubheading
            fieldHeader1
            fieldCsrHeading
            fieldCsrDescription5
            fieldMainImageVideoDesktop {
              targetId
              display
              description
              entity{
                url
              }
            }
            fieldMainImageVideoMobile {
              targetId
              display
              description
              entity{
                url
              }
            }
            fieldCanonicalUrl
            fieldMetaDescription
            fieldMetaTitle
            fieldMetaKeywords
            fieldCol1Header
            fieldCol1Text7
            fieldButtonText,
            fieldButtonUrl,
            fieldButton4Text
            fieldButton3
            fieldCsrImage{
              url
            }
            fieldCsrButtonLabel
            fieldCsrButtonUrl
          }
        }
        }
  }
  }
}`;

export { ABOUT_US };
