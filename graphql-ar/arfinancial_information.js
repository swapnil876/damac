import { gql } from '@apollo/client';

const ARFINANCIAL_INFORMATION = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["financial_information"]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeFinancialInformation{
         nid
         fieldPageTitleF
         fieldTab1Heading
         fieldMetaTitleF
         fieldMetaDescriptionF
         fieldMetaKeywordsF
         fieldCanonicalUrlF
         fieldMultipleFilesF{
          entity{
            ... on ParagraphMultipleFilesWithTitle{
              id
              fieldDate{
                value
              },
              fieldFileTitle,
              fieldFile{
                entity{
                  url
                }
              }
            }
          }
        }
         fieldMultipleTabs{
          entity{
            ... on ParagraphTabs{
              id
              fieldTabHeading
              fieldIframeContent
            }
          }
        }
      }
    }
    }
  }
}`;

export { ARFINANCIAL_INFORMATION };
