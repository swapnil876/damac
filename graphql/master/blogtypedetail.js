import { gql } from '@apollo/client';

const BLOGTYPEDETAIL = gql`
query BLOGTYPEDETAIL($type: String!){
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "field_category.entity.tid", value: [$type]}]}) {
    entities {
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
      }
    }
  }
}`;

export { BLOGTYPEDETAIL };
// 9 - Article
// 18 - Industry News
// 17 - New articles
// 8 - Press Release