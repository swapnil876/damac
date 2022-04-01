import { gql } from '@apollo/client';

const COMMUNITY = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["community"]}]}) {
    entities {
      entityTranslation(language: EN) {
      ... on NodeCommunity{
          nid
          title
          fieldTagline
          fieldLocation{
            entity{
              ... on TaxonomyTermLocation{
                tid
                name
              }
            }
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
          fieldBrandIcons{
            entity{
              ... on ParagraphMultipleIcons{
                fieldIconText
                fieldIconImage{
                  url
                }
              }
              
            }
          }
          fieldPropertyTypec {
            entity{
              tid
              name
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
        fieldMultipleFaqs{
         entity{
            ... on ParagraphMultipleFaqs{
              fieldAnswer
              fieldQuestion
            }
          }
        }
        fieldLongitude
        fieldLatitude
        fieldMetaTitleComm
        fieldMetaDescriptionComm
        fieldMetaKeywordsComm
        fieldCanonicalUrlComm
        fieldSection4Heading
        fieldText
        fieldHeading
        fieldWhatsappNumber
      }
    }
  }
  }
}`;

export { COMMUNITY };
