import { gql } from '@apollo/client';

const ARINTHENEWSLISTING = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["in_the_news_listing"]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeInTheNewsListing{
         nid
        fieldPageTitleIn
      }
    }
    }
  }
}`;

export { ARINTHENEWSLISTING };
