import { gql } from '@apollo/client';

const PROJECTSEARCH = gql`
  query{
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["project"]}], title:{contains:"SS"}}) {
      entities {
        ... on NodeProject{
            nid
            title
             fieldTaglingP
            fieldCityp {
              entity{
                tid
                name
              }
            }
            fieldCountryP {
              entity{
                tid
                name
              }
            }
          fieldMainImageDesktopP{
            targetId
            title
            url
          }
          fieldMainImageMobileP{
            targetId
            title
            url
          }
          fieldGalleryDesktopP {
            targetId
            url
          }
          fieldGalleryMobileP{
            targetId
            url
          }
          fieldBrochureP{
            entity{
              fid
              url
            }
          }
          fieldCommunity{
            entity{
              nid
              title
            }
          }
          fieldTitleP2
          fieldDescriptionP2{
            value
          }
          fieldPropertyType{
            entity{
              tid
              name
            }
          }
          fieldStartingFromPriceP2
          fieldAreaP2
          fieldBedRoomsP2
          fieldLocalityP2
          fieldStatusP2
          
          fieldCol1ImageDesktopP2{
            entity{
              fid
              filename
              url
            }
          }
          fieldCol1ImageMobileP3{
            entity{
              fid
              filename
              url
            }
          }
          fieldCol2Row1Col1ImageDesp3{
            entity{
              fid
              filename
              url
            }
          }
          fieldCol2Row1Col1ImageMobp3{
            entity{
              fid
              filename
              url
            }
          }
          fieldCol2Row1Col2ImageDesp3{
            entity{
              fid
              filename
              url
            }
          }
          fieldCol2Row1Col2ImageMobp3{
            entity{
              fid
              filename
              url
            }
          }
          fieldCol2Row2ImageDesktopP3{
            entity{
              fid
              filename
              url
            }
          }
          fieldCol2Row2ImageMobileP3{
            entity{
              fid
              filename
              url
            }
          }
          fieldCol1TextP3
          
          fieldAmenitiesP3{
            entity{
              ... on ParagraphMultipleAmenities{
                id
                fieldIcona{
                  targetId
                  title
                  url
                }
                fieldTextAmi
                fieldValueAmi
              }
            }
          }
          fieldDescriptionText
          fieldGalleryDesktopP4{
            entity{
              fid
              filename
              url
            }
          }
          fieldGalleryMobileP4{
            entity{
              fid
              filename
              url
            }
          }
          
          fieldAboutTextp4
          fieldVideop4{
            title
            url {
              path
              routed
            }
          }
          fieldMutipleFaqs{
            entity{
              ... on ParagraphMultipleFaqs{
                fieldAnswer
                fieldQuestion
              }
            }
          }
          
          fieldMultipleLocatorsp4{
            entity{
              ... on ParagraphMultipleLocators{
                id
                fieldIconm{url}
                fieldTextc6
                fieldValuec6
              }
            }
          }
          
          fieldLongitudeP4
          fieldLatitudeP4
          fieldMetaTitleProj
          fieldMetaDescriptionProj
          fieldMetaKeywordsProj
          fieldCanonicalUrlProj
          field3dTourLink
          fieldTextSec7
          fieldWhatsapp
          fieldHeadingSec7
        }
      }
    }
  }`;

export { PROJECTSEARCH };
