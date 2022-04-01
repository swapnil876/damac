import { gql } from '@apollo/client';

const ARANNUALREPORTS = gql`
query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["annual_reports"]}]}) {
       entities {
        entityTranslation(language: AR) {
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

export { ARANNUALREPORTS };