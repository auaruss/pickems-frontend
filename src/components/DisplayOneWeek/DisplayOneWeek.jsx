import DisplayCardSet from '../DisplayCardSet/DisplayCardSet';
import AddGameCard from '../AddGameCard/AddGameCard'
import { useQuery } from '@apollo/client';
import { GET_WEEK_ID_BY_NUMBER, GET_GAMES_BY_WEEK_ID } from '../../queries/game-queries';
import './DisplayOneWeek.css';

export default function DisplayOneWeek({
  week
}) {
  const {
    loading: weekIdLoading,
    error: weekIdError,
    data: weekIdData
  } = useQuery(GET_WEEK_ID_BY_NUMBER, {
    variables: {
      weekNumber:week
    }
  });

  return (
    <div className="display-week">
      <h2 className="week-heading">Week {week}</h2>
      {
        (weekIdLoading) ? <></>
        : (weekIdError) ? <p>Error!</p>
        : <AddGameCard weekId={weekIdData.getWeekByNumber.id} GET_GAMES_BY_WEEK_ID={GET_GAMES_BY_WEEK_ID} />
      }
      {
        (weekIdLoading) ? <p>Loading...</p>
        : (weekIdError) ? <p>Error!</p>
        : <DisplayCardSet weekId={weekIdData.getWeekByNumber.id} GET_GAMES_BY_WEEK_ID={GET_GAMES_BY_WEEK_ID} />
      }
    </div>
  )
}
