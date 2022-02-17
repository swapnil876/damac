import { gql } from '@apollo/client';

const ABOUT_US = gql`
# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that starts
# with a # are ignored.
#
# An example GraphQL query might look like:
#
#     {
#       field(arg: "value") {
#         subField
#       }
#     }
#
# Keyboard shortcuts:
#
#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
#
#       Run Query:  Ctrl-Enter (or press the play button above)
#
#   Auto Complete:  Ctrl-Space (or just start typing)
#

query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["about_us"]}]}) {
    entities {
      ... on NodeAboutUs{
        nid
        fieldHeader1
        fieldHeader2
        fieldHeader3
        fieldHeader4
        fieldHeader5
        fieldCounter3 {
          entity{
            ... on ParagraphCounter{
              id
              fieldCountText
              fieldCountValue
            }
          }
        }
        fieldMultipleTeam{
          entity{
            ... on ParagraphMultipleTeamAbout{
              fieldName,
              fieldImage{
                url
              }
              fieldTitleTeam
            }
          }
        }
        fieldMultipleHistory{
          entity{
            ... on ParagraphMultipleHistoryAbout{
              fieldBody{
                value
              }
              fieldYear
            }
          }
        }
        fieldDescription1
        fieldDescription2
        fieldDescription3
        fieldDescription4 {
          value
        }
        fieldDescription5 {
          value
        }
        fieldImage2 {
          url
        }
        fieldImage3 {
          url
        }
        fieldImage4 {
          url
        }
        fieldSection5Heading
        fieldTeamSubheading
        fieldHistoryHeading
        fieldHistorySubheading
        fieldHeader1
        fieldCsrHeading
        fieldCsrDescription5
        fieldMainImageVideoDesktop {
          targetId
          display
          description
        }
        fieldMainImageVideoMobile {
          targetId
          display
          description
        }
        fieldCanonicalUrl
        fieldMetaDescription
        fieldMetaTitle
        fieldMetaKeywords
        fieldCol1Header
        fieldCol1Text7
        
      }
    }
  }
}`;

export { ABOUT_US };
