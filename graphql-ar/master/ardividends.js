import { gql } from '@apollo/client';

const ARDIVIDENDS = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["dividends"]}]}) {
      entities {
         entityTranslation(language: AR) {
      ... on NodeDividends{
            nid
            fieldPageTitleD{
              value
            }
            fieldTabs{
               entity{
                ... on ParagraphTabs{
                    fieldIframeContent
                    fieldTabHeading
                }
              }
            }
      }
   }
      }
   }
}`;

export { ARDIVIDENDS };