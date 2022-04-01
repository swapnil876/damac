import { gql } from '@apollo/client';

const AROFFERSDETAILS = gql`
  query OFFERSDETAILS($id: String!){
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "nid", language:AR, value: [$id]}]}) {
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

export { AROFFERSDETAILS };
