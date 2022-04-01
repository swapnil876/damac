import { gql } from '@apollo/client';

const ARQUICKFACTSHEET = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["quick_factsheet"]}]}) {
      entities {
        entityTranslation(language: AR) {
      ... on NodeQuickFactsheet{
            nid
            fieldPageTitle{
              value
            }
            fieldDescriptionHeadingQf{
              value
            }
            fieldCol1Text{
              value
            }
            fieldCol2Text{
              value
            }
            fieldIframContent
      }
    }
      }
   }
}`;

export { ARQUICKFACTSHEET };