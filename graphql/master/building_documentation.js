import { gql } from '@apollo/client';

const BUILDING_DOCUMENTATION = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["building_documentation"]}]}) {
    entities {
      entityTranslation(language: EN) {
        ... on NodeBuildingDocumentation{
          nid
          fieldIntroduction,
          fieldPageTitleBd,
          fieldMultipleFiles{
           entity{
             ... on ParagraphMultipleFilesWithTitle{
               fieldDate{
                 value
               },
               fieldFileTitle,
               fieldFile{
                 entity{
                   url
                 }
               }
             }
           }
          },
          fieldMetaDescriptionBd,
          fieldMetaKeywordsBd,
          fieldMetaTitleBd,
          fieldCanonicalUrlBd
       }
        }
    }
  }
}`;

export { BUILDING_DOCUMENTATION };
