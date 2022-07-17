const { ApolloServer, gql } = require("apollo-server");

export const typeDefs = gql`
	type getUserDetails {
		id: ID
		subscriptionType: String
		subscriptionStartDate: Date
	}
`;
