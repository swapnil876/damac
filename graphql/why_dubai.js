import { gql } from '@apollo/client';

const WHY_DUBAI = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["why_dubai"]}]}) {
    entities {
      ... on NodeWhyDubai{
      nid
      fieldCanonicalUrlWhydubai
      fieldMetaTitleWhydubai
      fieldMetaKeywordsWhydubai
      fieldMetaDescriptionWhydubai
      fieldCanonicalUrlWhydubai
      fieldMainImageDesktopd {
        targetId
        url
      }
      fieldMainImageMobile {
        targetId
        url
      }
      fieldHeaderw2
      fieldDescription
      fieldMultipleCounters{
        entity{
          ... on ParagraphMultipleCountersDubai{
            id
            fieldText
            fieldIcon {
              targetId
              url
            }
          }
        } 
      }
      fieldHeaderw2
      fieldSec2Col1Text
      fieldSec2Col2Text
       fieldSec3Col1Text
      fieldHeaderw3
      fieldCol1Text3
      fieldSec3Col2Text
      fieldMutlipleAreas {
        entity{
          ... on ParagraphMutlipleAreasDubai{
            id
            fieldTitle
            fieldTextw
          }
        }
      }
      fieldInvestorText
      fieldMultipleStories {
        entity{
          ... on ParagraphMultipleStories{
            id
            fieldTextw4
          }
        }
      }
      fieldOpportunityText
      fieldMainImageDesktopd {
        targetId
        url
      }
      fieldMainImageMobile {
        targetId
        url
      }
      fieldOl2Row1Col1ImageDeskto {
        targetId
        url
      }
      fieldOl2Row1Col1ImageMobile {
        targetId
        url
      }
      fieldOl2Row1Col2ImageDeskto {
        targetId
        url
      }
      fieldCol2Row1Col2ImageMobil {
        targetId
        url
      }
      fieldCol2Row2ImageDesktop {
        targetId
        url
      }
      fieldCol2Row2ImageMobile {
        targetId
        url
      }
      fieldCol1Text5
      }
    }
    }
  }`;

export { WHY_DUBAI };
