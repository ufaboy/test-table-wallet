import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://api.thegraph.com/subgraphs/name/chimpytuts/darkpools-main-arbitrum',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export default new ApolloClient({
  link: httpLink,
  cache,
})