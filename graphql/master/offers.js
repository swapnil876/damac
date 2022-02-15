import { gql } from '@apollo/client';

const OFFERS = gql`
  query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["offers"]}]}) {
    entities {
      ... on NodeOffers{
         nid,
        title
         fieldImageOffer {
           targetId
           title
           url
        },
        fieldDescriptionOffer
        fieldMetaTitleOffers
        fieldMetaDescriptionOffers
        fieldMetaKeywordsOffers
        fieldCanonicalUrlOffers
      }
    }
  }
}`;

export { OFFERS };
