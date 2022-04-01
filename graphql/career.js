import { gql } from '@apollo/client';

const CAREERS = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["career"]}]}) {
      entities {
        entityTranslation(language: EN) {
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
          fieldTitle1
          fieldTitle2
          fieldSubTitle1
          fieldSubTitle2
        }
          }
      }
    }
  }`;

export { CAREERS };
