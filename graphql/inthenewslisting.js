import { gql } from '@apollo/client';

const INTHENEWSLISTING = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["in_the_news_listing"]}]}) {
    entities {
      ... on NodeInTheNewsListing{
         nid
        fieldPageTitleIn
      }
    }
  }
}`;

export { INTHENEWSLISTING };
