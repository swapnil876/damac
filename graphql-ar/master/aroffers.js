import { gql } from '@apollo/client';

const AROFFERS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["offers"]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeOffers{
         nid,
        title
        fieldSubtitle
         fieldImageOffer {
           targetId
           title
           url
        }
        fieldProjects{
          entity{
            ... on NodeProject{
              nid
              title
              fieldTaglingP
            }
          }
        }
        fieldOfferText{
          value
        }
        fieldMetaTitleOffers
        fieldMetaDescriptionOffers
        fieldMetaKeywordsOffers
        fieldCanonicalUrlOffers
        fieldMultipleFaqsO{
          entity{
            ... on ParagraphMultipleFaqs{
              fieldQuestion
              fieldAnswer
            }
          }
        }
      }
    }
    }
  }
}`;

export { AROFFERS };
