import { gql } from '@apollo/client';

const SHARE_INFO = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["share_information"]}]}) {
    entities {
      entityTranslation(language: EN) {
        ... on NodeShareInformation{
          nid,
          fieldPageTitleS
             fieldTabsS{
             entity{
               ... on ParagraphTabs{
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

export { SHARE_INFO };
