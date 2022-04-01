import { gql } from '@apollo/client';

const ARCHAIRMANMESSAGE = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["chairman_s_message"]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeChairmanSMessage{
        title
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
export { ARCHAIRMANMESSAGE };


