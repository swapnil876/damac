import { gql } from '@apollo/client';

const TESTIMONIAL = gql
`query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["building_documentation"]}]}) {
    entities {
      ... on NodeBuildingDocumentation{
         nid
         fieldIntroduction,
         fieldPageTitleBd,
         fieldMultipleFiles{
          entity{
            ... on ParagraphMultipleFilesWithTitle{
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
         },
         fieldMetaDescriptionBd,
         fieldMetaKeywordsBd,
         fieldMetaTitleBd,
         fieldCanonicalUrlBd
      }
    }
  }
}`

export { TESTIMONIAL };