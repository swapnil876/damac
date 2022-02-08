import { gql } from '@apollo/client';

const QUICKFACTSHEET = gql`
query {
   nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["quick_factsheet"]}]}) {
      entities {
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
}`;

export { QUICKFACTSHEET };