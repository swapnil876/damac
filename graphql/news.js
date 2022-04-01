import { gql } from '@apollo/client';

const NEWS = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["news"]}]}) {
    entities {
      entityTranslation(language: EN) {
        ... on NodeNews{
          nid,
          title
         fieldCategoryn {
            entity{
             ... on TaxonomyTermNewsCategory{
               tid
               name
             }
           }
         },
         fieldFeatureImageMobileNews {
           targetId
           title
           url
         },
         fieldFeatureImageDesktopNews {
           targetId
           title
           url
         },
         body{
           value
         }
         fieldMetaTitleNews
         fieldMetaDescriptionNews
         fieldMetaKeywordsNews
         fieldCanonicalUrlNews
       }
        }
    }
  }
}`;

export { NEWS };
