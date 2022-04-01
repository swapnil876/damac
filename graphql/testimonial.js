import { gql } from '@apollo/client';

const TESTIMONIAL = gql
`query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:EN, value: ["testimonial_main"]}]}) {
    entities {
      entityTranslation(language: EN) {
        ... on NodeTestimonialMain{
          nid
          title,
          fieldMainVideo{
              title
                url {
                  path
                }
          },
            fieldMultipleTestimonails{
              entity{
              ... on ParagraphTestimonials{
                fieldTestimonialText,
                fieldTestimonialName,
                fieldTestimonialHeading,
                fieldTestimonialImage{
                  url
                }
              }
            }
          }
        }
        }
    }
  }
}`

export { TESTIMONIAL };