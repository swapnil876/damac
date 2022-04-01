import { gql } from '@apollo/client';

const ARSHARE_INFO = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["share_information"]}]}) {
    entities {
      entityTranslation(language: AR) {
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

export { ARSHARE_INFO };
