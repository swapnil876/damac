import { gql } from '@apollo/client';

const OFFERSDETAILS = gql`
  query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["offers"]}]}) {
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
      }
    }
  }
}`;

export { OFFERSDETAILS };
