import { gql } from '@apollo/client';

const _CSR = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["csr"]}]}) {
      entities {
        ... on NodeCsr{
            nid
            title
             fieldOurCause
            fieldMilestones {
              entity{
                ... on ParagraphMultipleMilestones{
                  id
                  fieldTextMile
                  fieldImageMile {
                    targetId
                    url
                  }
                  fieldHeaderMile
                }
              }
            }
            fieldOurMission
            fieldFoundationText
            fieldHeaderImageVideoMobCs{
                targetId
                description
                entity{
                  fid
                  filename
                  url
                  uri {
                    value
                    url
                  }
                }
              }
             fieldHeaderImageVideoDeskCs{
                targetId
                description
                entity{
                  fid
                  filename
                  url
                  uri {
                    value
                    url
                  }
                }
              }
               fieldFoundationImageDesktop {
                 targetId
                 url
               }
              fieldFoundationImageMobile {
              targetId
              url
            }

            fieldMission
            fieldWhyCsr
            fieldCause
            
            fieldCanonicalUrlCsr
            fieldMetaTitleCsr
            fieldMetaKeywordsCsr
            fieldMetaDescriptionCsr
            fieldCanonicalUrlCsr
          }
      }
    }
  }`;

export { _CSR };
