import { gql } from '@apollo/client';

const DIVIDENDS = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["dividends"]}]}) {
      entities {
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
}`;

export { DIVIDENDS };