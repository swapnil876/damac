import { gql } from '@apollo/client';

const ARHOME = gql`
  query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["home"]}]}) {
      entities {
        entityTranslation(language: AR) {
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
    }
  }`;

export { ARHOME };
