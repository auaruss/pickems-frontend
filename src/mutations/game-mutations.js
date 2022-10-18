import { gql } from '@apollo/client';

const ADD_GAME_MUTATION = gql`
  mutation AddGame(
    $home: String!,
    $away: String!,
    $winner: String,
    $weekId: ID!
  ) {
    createGame(
      home: $home,
      away: $away,
      winner: $winner
      weekId: $weekId
    ) {
      home
      away
      winner
      weekId
    }
  }
`;

export { ADD_GAME_MUTATION };
