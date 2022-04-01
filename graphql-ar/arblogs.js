import { gql } from '@apollo/client';

const ARBLOGS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["blog"]}]}) {
    entities {
      entityTranslation(language: AR) {
      ... on NodeBlog{
         nid,
        title,
        fieldCategory {
          targetId
          entity{
            tid,
            name
          }
        },
        fieldFeatureImageMobile {
          targetId
          title
          url
        },
        fieldThumbnailDesktop{
          targetId
          url
        }
        fieldThumbnailMobile{
          targetId
          url
        }
        fieldFeatureImageDesktop {
          targetId
          title
          url
        }
        fieldShortText
        body{
          value
        }
        fieldMetaTitleBlog
        fieldMetaDescriptionBlog
        fieldMetaKeywordsBlog
        fieldCanonicalUrlBlog
        fieldTag {
          targetId
          entity{
            name
          }
        }
        fieldAuthor {
          targetId
          entity{
            name
          }
        }
        entityCreated
      }
    }
    }
  }
}`;

export { ARBLOGS };
