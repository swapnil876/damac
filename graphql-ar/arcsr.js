import { gql } from '@apollo/client';

const AR_CSR = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["csr"]}]}) {
      entities {
        entityTranslation(language: AR) {
        ... on NodeCsr{
            nid
            title
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

            fieldWhyCsr
            
            fieldCanonicalUrlCsr
            fieldMetaTitleCsr
            fieldMetaKeywordsCsr
            fieldMetaDescriptionCsr
            fieldCanonicalUrlCsr
            fieldWhyCsrHeading
            fieldMilestoneHeader
            fieldMilestoneDescription
            fieldFoundationHeader
            fieldSectionContent{
              value
            }
            fieldSectionHeading{
              value
            }
          
          }
        }
      }
    }
  }`;

export { AR_CSR };
