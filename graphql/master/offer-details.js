import { gql } from '@apollo/client';

const OFFERSDETAILS = gql`
  query OFFERSDETAILS($id: String!){
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "nid", value: [$id]}]}) {
    entities {
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
}`;

export { OFFERSDETAILS };
