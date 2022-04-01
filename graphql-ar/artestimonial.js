import { gql } from '@apollo/client';

const ARTESTIMONIAL = gql
`query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", language:AR, value: ["testimonial_main"]}]}) {
    entities {
      entityTranslation(language: AR) {
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

export { ARTESTIMONIAL };