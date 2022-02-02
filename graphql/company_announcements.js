import { gql } from '@apollo/client';

const COMPANY_ANNOUNCEMENTS = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["career"]}]}) {
      entities {
        ... on NodeCareer{
            nid
            title
             fieldHeaderImageVideoMobile{
              targetId
              description
              entity{
                fid
                filename
                url
              }
            }
          fieldHeaderImageVideoDesktop{
            targetId
            description
            entity{
              fid
              filename
              url
            }
          }
          fieldMutlipleIcons{
            entity{
              ... on ParagraphMultipleIcons{
                fieldIconImage{
                  url
                }
                fieldIconText
              }
            }
          }
          fieldVideoUrl{
            title
            url {
              path
            }
          }
          fieldMetaKeywordsCareer
          fieldMetaTitleCareer
          fieldMetaDescriptionCareer
          fieldCanonicalUrlCareer
        }
      }
    }
  }`;

export { COMPANY_ANNOUNCEMENTS };
