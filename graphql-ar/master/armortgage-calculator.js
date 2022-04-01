import { gql } from '@apollo/client';

const ARMORTGAGECALCULATOR = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["mortgage_calculator"]}]}) {
    entities {
      entityTranslation(language: AR) {
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

export { ARMORTGAGECALCULATOR };
