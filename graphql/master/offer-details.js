import { gql } from '@apollo/client';

const OFFERSDETAILS = gql`
  query OFFERSDETAILS($id: String!) {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "nid", value: [$id]}]}) {
    entities {
      ... on NodeOffers{
         nid,
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

export { OFFERSDETAILS };
