import { gql } from '@apollo/client';

const CAREERS = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["career"]}]}) {
      entities {
        ... on NodeCareer{
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
          fieldIcons{
            targetId
            title
            url
          }
          fieldVideoUrl{
            title
            url {
              path
            }
          }
        }
      }
    }
  }`;

export { CAREERS };
