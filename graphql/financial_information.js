import { gql } from '@apollo/client';

const FINANCIAL_INFORMATION = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["financial_information"]}]}) {
    entities {
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
}`;

export { FINANCIAL_INFORMATION };
