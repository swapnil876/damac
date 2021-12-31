import { gql } from '@apollo/client';

const COMMUNITY = gql`
  query {
    nodeQuery(limit: 1, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["community"]}]}) {
      entities {
        ... on NodeCommunity{
            nid
            title
            fieldTagline
            fieldCity {
              entity{tid,name}
            }
            fieldCountry {
              entity{tid,name}
            }
            fieldImageDesktop {alt,url}
            fieldImageMobile {alt,url}
            fieldGalleryDesktop {alt,url}
            fieldGalleryMobile {alt,url}
            fieldBrochure {
              entity{
                fid
                filename
                url
              }
            }
          
            fieldTitle2
            fieldDescriptionc2 {
              value
            }
            fieldPropertyTypec {
              entity{
                tid
                name
              }
            }
            fieldStartingFromPrice
            fieldArea
            fieldBedRooms
            fieldLocality
            fieldStatus
          
            fieldCol1ImageDesktopc{alt, url}
            fieldCol1ImageMobileC{alt, url}
            fieldCol2Row1Col1ImageDeskc{alt, url}
            fieldCol2Row1Col1ImageMobic{alt, url}
            fieldCol2Row1Col2ImageDeskc{alt, url}
            fieldCol2Row1Col2ImageMobic{alt, url}
            fieldCol2Row2ImageDesktopc{alt, url}
            fieldCol2Row2ImageMobilec{alt, url}
            fieldCol1Textc
          
            fieldAmenities{
              entity{
                ... on ParagraphMultipleAmenities{
                  id
                  fieldValueAmi
                  fieldIcona{alt, url}
                  fieldTextAmi
                }
              }
            }
            fieldDescriptionc4
            fieldGalleryMobileC4{alt, url}
          
          fieldCol1ImageDesktopC5{alt, url}
          fieldCol1ImageMobileC5{alt, url}
          fieldCol2Row1Col1ImageDesc5{alt, url}
          fieldCol2Row1Col1ImageMobc5{alt, url}
          fieldCol2Row1Col2ImageDeskc{alt, url}
          fieldCol2Row1Col2ImageMobc5{alt, url}
          fieldCol2Row2ImageDesktopC5{alt, url}
          fieldCol2Row2ImageMobileC5{alt, url}
          fieldCol1Textc5
          
          fieldAboutText{value}
          fieldMasterplan{entity{fid,filename,url}}
          fieldVideo{title, url {
            path
            routed
          }}
          fieldMultipleLocators{entity{
            ... on ParagraphMultipleLocators{
              id
              fieldIconm{alt, url}
              fieldValuec6
              fieldTextc6
            }
          }}
          fieldLongitude
          fieldLatitude
        }
      }
    }
  }`;

export { COMMUNITY };
