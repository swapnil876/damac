import { gql } from '@apollo/client';

const CHAIRMANMESSAGE = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["chairman_s_message"]}]}) {
    entities {
      ... on NodeChairmanSMessage{
        fieldDescriptiveText{
            value
        }
        fieldChairman
        fieldMetaKeywordsCm
        fieldMetaTitleCm
        fieldMetaDescriptionCm
        fieldCanonicalUrlCm
        fieldPageTitleCm
        fieldImageChairman{
          targetId
          url
        }
      }
    }
  }
}`;
// fieldDescriptiveText
export { CHAIRMANMESSAGE };


