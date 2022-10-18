import { gql } from '@apollo/client';

const GET_WEEK_ID_BY_NUMBER = gql`
  query GetWeekByNumber($weekNumber: Int!) {
    getWeekByNumber(weekNumber: $weekNumber) {
      id
    }
  }
`;

// This could be an optimization problem for apollo down the line?
const getGamesByWeekIdBuilder = (weekNumber) => (weekId) => {
  const x = `
    query GetGamesByWeek${weekNumber}Id {
      getGamesByWeekId(weekId: "${weekId}") {
        home
        away
      }
    }`;

  return gql`${x}`
}

export { getGamesByWeekIdBuilder, GET_WEEK_ID_BY_NUMBER };
