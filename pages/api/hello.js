// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

export default function handler(req, res) {
  const client = new ApolloClient({
    uri: 'http://mydevfactory.com/~devproject/drupalpronew/graphql?query=<REQUEST>',
    cache: new InMemoryCache()
  });
  // res.status(200).json({ name: 'John Doe' })
}
