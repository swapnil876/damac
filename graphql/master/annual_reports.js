import { gql } from '@apollo/client';

const ANNUALREPORTS = gql`
query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["annual_reports"]}]}) {
       entities {
        entityTranslation(language: EN) {
          ... on NodeAnnualReports{
            nid
            fieldDateAr{
             value
           }
           fieldFileAr{
             entity{
               url
             }
           }
         fieldTitleAr{
             value
         }
        }
          }
      }
    }
}`;

export { ANNUALREPORTS };