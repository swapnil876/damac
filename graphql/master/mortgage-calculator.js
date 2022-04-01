import { gql } from '@apollo/client';

const MORTGAGECALCULATOR = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["mortgage_calculator"]}]}) {
    entities {
      entityTranslation(language: EN) {
        ... on NodeMortgageCalculator{
          nid
          fieldHeading1
          fieldHeading2
          fieldText1
          fieldText2
          fieldMultipleFaqsM{
            entity{
            ... on ParagraphMultipleFaqs{
              fieldAnswer
              fieldQuestion
            }
              
            }
          }
      }
        }
    }
  }
}`;

export { MORTGAGECALCULATOR };
