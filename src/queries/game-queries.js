import { gql } from '@apollo/client';

const GET_WEEK_ID_BY_NUMBER = gql`
  query GetWeekByNumber($weekNumber: Int!) {
    getWeekByNumber(weekNumber: $weekNumber) {
      id
    }
  }
`;

const GET_GAMES_BY_WEEK_ID = gql`
  query GetGamesByWeekId($weekId: ID!) {
    getGamesByWeekId(weekId: $weekId) {
      home
      away
    }
  }
`;

export { GET_WEEK_ID_BY_NUMBER, GET_GAMES_BY_WEEK_ID };
