import { gql } from '@apollo/client';

const ANNUALREPORTS = gql`
query {
    nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["annual_reports"]}]}) {
       entities {
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
}`;

export { ANNUALREPORTS };