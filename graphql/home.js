import { gql } from '@apollo/client';

const HOME = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["home"]}]}) {
      entities {
        ... on NodeHome{
          title
           fieldMainImageDesktopHome{
            targetId
            url
          }
          fieldMainImageMobileHome{
            targetId
            url
          }
          body{
            value
          }
          fieldMetaKeywordsHome
          fieldMetaTitleHome
          fieldMetaDescriptionHome
          fieldCanonicalUrlHome
        }
      }
    }
  }`;

export { HOME };
